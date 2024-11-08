
use wasm_bindgen::prelude::*;
use std::collections::HashSet;

/// Represents a Pipelet.
#[wasm_bindgen]
pub struct Pipelet {
    name: String,
}

#[wasm_bindgen]
impl Pipelet {

    /// Creates a new Pipelet instance with a given name. If no name is provided, it defaults to "Nimbus".
    ///
    /// # Arguments
    ///
    /// * `name` - An optional `String` representing the name of the Pipelet.
    ///
    /// # Returns
    ///
    /// A new `Pipelet` instance.
    ///
    /// # Example
    ///
    /// ```rust
    /// let pipelet = Pipelet::new(Some("Charlie".to_string()));
    /// let pipelet_default = Pipelet::new(None);
    /// ```
    #[wasm_bindgen(constructor)]
    pub fn new(name: Option<String>) -> Pipelet {
        let assigned_name = name.unwrap_or_else(|| "Nimbus".to_string());
        Pipelet { name: assigned_name }
    }

    /// Responds to a given question with a specific answer.
    ///
    /// # Arguments
    ///
    /// * `question` - A `String` containing the question to be answered.
    ///
    /// # Returns
    ///
    /// A `String` containing the response.
    ///
    /// # Example
    ///
    /// ```rust
    /// let pipelet = Pipelet::new(Some("Charlie".to_string()));
    /// let response = pipelet.respond("What is your name?".to_string());
    /// assert_eq!(response, "I'm 'Charlie'!");
    /// ```
    #[wasm_bindgen]
    pub fn respond(&self, question: String) -> String {
        // Define the set of recognized questions
        let questions = [
            "What is your name?",
            "Can you tell me your name?",
            "May I know your name?",
            "What should I call you?",
            "What do you go by?",
            "How do you identify yourself?",
            "What name do you use?",
            "Can you introduce yourself?",
            "What is your program name?",
            "How should I refer to you?",
            "Could you share your name with me?",
            "What’s your official name?",
            "What is the title of your program?",
            "What do you prefer to be called?",
        ].iter().cloned().collect::<HashSet<_>>();

        if questions.contains(question.as_str()) {
            format!("I'm '{}'!", self.name)
        } else {
            format!("Well, I don't have answers to everything, you know...")
        }
    }

}
