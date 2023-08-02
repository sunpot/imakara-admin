use serde::Deserialize;
use std::{process, env, env::VarError};

#[derive(Deserialize, Debug)]
pub struct Config {
    pub username: String,
    pub password: String,
    pub db_address: String,
}

impl Config {
    pub fn get() -> Config {
        let config = match Config::parse() {
            Ok(val) => val,
            Err(e) => {
                eprintln!("{}", e);
                process::exit(1);
            }
        };
        return config;
    }

    fn parse() -> Result<Config, VarError> {
        return Ok(Config {
            username: env::var("username").unwrap(),
            password: env::var("password").unwrap(),
            db_address: env::var("db_address").unwrap(),
        })
    }
}