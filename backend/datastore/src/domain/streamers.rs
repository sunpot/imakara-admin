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
    pub fn new(primary_url: String) -> Result<Snippet, ParseError> {
        let a = Url::parse(&primary_url)?;
        Ok(Snippet { id: Uuid::new_v4().to_string(), primary_url: a.to_string() })
    }

    pub async fn list_all_streamer() -> Result<Vec<Snippet>, Box<dyn Error>> {
        let repo = RepositoryFactory::streamers_repository().await?;
        Ok(repo.list_streamers().await?)
    }

}

impl Detail {
    pub async fn put_streamer_detail(self) -> Result<(), Box<dyn Error>> {
        let repo = RepositoryFactory::streamers_repository().await?;
        repo.put_streamer(self).await?;
        Ok(())
    }

    pub async fn get_by_id(id: &str) -> Result<Option<Self>, Box<dyn Error>> {
        let repo = RepositoryFactory::streamers_repository().await?;
        Ok(repo.get_streamer(id).await?)
    }
}