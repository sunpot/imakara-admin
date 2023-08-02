pub mod streamers;

use mongodb::Client;
use crate::domain::config::Config;
use crate::domain::infra::streamers::StreamersRepository;

use crate::repos::mongodb::{
    streamers::MongoStreamersRepository,
};
pub struct RepositoryFactory {
}
/// ここで依存性注入してます。
impl RepositoryFactory {
    async fn get_client() -> Result<Client, Box<dyn std::error::Error>> {
        let config = Config::get();
        let uri = format!("mongodb://{}:{}@{}:27017", config.username, config.password, config.db_address);

        Ok(Client::with_uri_str(uri).await?)
    }

    pub async fn streamers_repository() -> Result<Box<StreamersRepository>, Box<dyn std::error::Error>> {
        let client = RepositoryFactory::get_client().await?;
        Ok(Box::new(MongoStreamersRepository {0: client}))
    }
}