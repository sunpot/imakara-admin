use tonic::{transport::Server, Request, Response, Status};
use crate::domain::streamers::Snippet;
use crate::proto::imakara_admin_common::{StreamerInfoRequest, StreamerInfoResponse, streamer_info_server::{
    StreamerInfo,
    StreamerInfoServer
}, ValidationResponse};

#[derive(Debug, Default)]
pub struct StreamerInfoImpl {}

#[tonic::async_trait]
impl StreamerInfo for StreamerInfoImpl {
    async fn get_streamer_info(&self, request: Request<StreamerInfoRequest>) -> Result<Response<StreamerInfoResponse>, Status> {
        todo!()
    }
}

pub async fn run() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50001".parse()?;

    println!("Hello, server: {}", addr);

    Server::builder()
        .add_service(StreamerInfoServer::new(StreamerInfoImpl::default()))
        .serve(addr)
        .await?;

    Ok(())
}

