use wasm_bindgen::prelude::*;

/// The `Pipelet` struct with a single field `name` of type `String`.
#[wasm_bindgen]
pub struct Pipelet {
    name: String
}

#[wasm_bindgen]
impl Pipelet {

    /// Public function to create a new `Pipelet` instance.
    #[wasm_bindgen]
    pub fn create() -> Pipelet {
        Pipelet::new()
    }

    /// Public function that takes a `&str` question and returns a `String` response.
    #[wasm_bindgen]
    pub fn respond(&self, question: &str) -> String {
        match question {
            "What is your name?" => format!("I'm '{}'!", self.name),
            _ => format!("Well, I don't have answers to everything, you know..."),
        }
    }

    /// Private function to create a new `Pipelet` instance with the name "Charlie".
    fn new() -> Pipelet {
        Pipelet { name: String::from("Charlie") }
    }
}
