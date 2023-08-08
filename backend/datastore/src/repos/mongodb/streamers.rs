use std::error::Error;
use async_trait::async_trait;
// use std::str::FromStr;
use futures_util::{/*StreamExt,*/ TryStreamExt};
use mongodb::{Client};
use crate::domain::streamers::{Detail, Snippet};
use crate::domain::infra::streamers::TStreamersRepository;
use super::entity::*;

pub struct MongoStreamersRepository(pub(crate) Client);

const COLLECTION: &str = "streamers";

#[async_trait]
impl TStreamersRepository for MongoStreamersRepository {
    async fn list_streamers(&self) -> Result<Vec<Snippet>, Box<dyn std::error::Error>> {
        let client = &self.0;
        let collection = client
            .database(super::DATABASE)
            .collection::<Streamer>(COLLECTION);

        let mut cursor = collection.find(None, None).await?;

        let mut list: Vec<Snippet> = Vec::new();

        while let Some(streamer) = cursor.try_next().await? {
            list.push(Snippet {
                id: streamer.id.to_string(),
                primary_url: streamer.channel_url
            });
        }
        Ok(list)
    }

    async fn put_streamer(&self, streamer_detail: Detail) -> Result<(), Box<dyn Error>> {
        let client = &self.0;
        let item = Streamer::from_model(streamer_detail);
        let collection = client
            .database(super::DATABASE)
            .collection::<Streamer>(COLLECTION);
        collection.insert_one(item, None).await?;
        Ok(())
    }
}