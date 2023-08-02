mod proto;
mod domain;
mod controller;
mod repos;

use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    controller::run().await?;

    Ok(())
}
