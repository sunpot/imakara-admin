use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};
use crate::domain::streamers::Snippet;

#[derive(Debug, Serialize, Deserialize)]
pub struct Streamer {
    pub id: String,
    pub title: String,
    pub description: String,
    pub channel_url: String,
    pub avatar_url: String,
}