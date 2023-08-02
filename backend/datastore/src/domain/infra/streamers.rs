use std::error::Error;
use async_trait::async_trait;
use crate::domain::streamers::Snippet;

pub type StreamersRepository = dyn TStreamersRepository + Send + Sync;

#[async_trait]
pub trait TStreamersRepository {
    async fn list_streamers(&self) -> Result<Vec<Snippet>, Box<dyn Error>>;
}