use std::error::Error;
use async_trait::async_trait;
use crate::domain::streamers::{Detail, Snippet};

pub type StreamersRepository = dyn TStreamersRepository + Send + Sync;

#[async_trait]
pub trait TStreamersRepository {
    async fn list_streamers(&self) -> Result<Vec<Snippet>, Box<dyn Error>>;
    async fn put_streamer(&self, streamer_detail: Detail) -> Result<(), Box<dyn Error>> ;
}