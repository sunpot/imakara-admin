use std::error::Error;
use uuid::{Uuid};
use url::{Url, ParseError};
use crate::domain::infra::RepositoryFactory;

pub struct Detail {
    pub snippet: Snippet,
    pub title: String,
    pub locale: String,
    pub description: String,
    pub thumbnail_url: String,
    pub avatar_url: String,
}

pub struct Snippet {
    pub id: String,
    pub primary_url: String,
}

impl Snippet {
    pub async fn list_all_streamer() -> Result<Vec<Snippet>, Box<dyn Error>> {
        let repo = RepositoryFactory::streamers_repository().await?;
        Ok(repo.list_streamers().await?)
    }
}