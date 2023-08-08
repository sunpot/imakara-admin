use serde::{Deserialize, Serialize};
use crate::domain::streamers::{Detail};

#[derive(Debug, Serialize, Deserialize)]
pub struct Streamer {
    pub id: String,
    pub title: String,
    pub description: String,
    pub channel_url: String,
    pub avatar_url: String,
}

impl Streamer {
    pub fn from_model(streamer_detail: Detail) -> Streamer {
        Streamer {
            id: streamer_detail.snippet.id,
            title: streamer_detail.title,
            description: streamer_detail.description,
            channel_url: streamer_detail.snippet.primary_url,
            avatar_url: streamer_detail.avatar_url,
        }
    }
}