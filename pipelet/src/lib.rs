
use log::info;

/// The default name for the Pipelet.
const DEFAULT_NAME: &str = "Charlie";

/// A struct representing a Pipelet, which can start a conversation.
pub struct Pipelet {

    /// The name of the Pipelet.
    /// 
    /// This will be either a user-defined name or the default name "Charlie".
    name: String
    
}

impl Pipelet {

    /// Creates a new Pipelet instance.
    ///
    /// If the provided `name` is `None`, the default name "Charlie" will be used.
    ///
    /// # Parameters
    ///
    /// * `name`: An optional string that represents the name of the Pipelet.
    ///
    /// # Returns
    ///
    /// A new `Pipelet` instance with the specified name or the default name.

    pub fn create(name: Option<String>) -> Pipelet {
        Pipelet { name: name.unwrap_or_else(|| String::from(DEFAULT_NAME)) }
    }

    /// Starts a conversation by logging the name of the Pipelet.
    ///
    /// This method logs a greeting message including the Pipelet's name.

    pub fn start_conversation(&self) {
        info!("Hello, my name is {}", self.name);
    }

}
