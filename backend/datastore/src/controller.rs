// use std::error::Error;
use tonic::{transport::Server, Request, Response, Status, Code};
// use tonic::service::interceptor;
use crate::domain::streamers::{Snippet, Detail};
use crate::proto::imakara_admin::{
    StreamerInfoRequest,
    StreamerInfoResponse,
    common_server::{
        Common,
        CommonServer,
    },
    PutStreamerInfoRequest,
    PutStreamerInfoResponse,
    ListStreamerInfoRequest,
    ListStreamerInfoResponse,
    ValidationResult
};

#[derive(Debug, Default)]
pub struct CommonImpl {}

#[tonic::async_trait]
impl Common for CommonImpl {
    async fn get_streamer_info(&self, _: Request<StreamerInfoRequest>) -> Result<Response<StreamerInfoResponse>, Status> {
        todo!()
    }

    async fn list_streamer_info(&self, _: Request<ListStreamerInfoRequest>) -> Result<Response<ListStreamerInfoResponse>, Status> {
        let items = match Snippet::list_all_streamer().await {
            Ok(r) => r,
            Err(e) => return Err(Status::new(Code::Internal, e.to_string())),
        };

        Ok(Response::new(ListStreamerInfoResponse { ids: items.iter().map(|x| x.id.to_string()).collect() }))
    }

    async fn put_streamer_info(&self, request: Request<PutStreamerInfoRequest>) -> Result<Response<PutStreamerInfoResponse>, Status> {
        let req_inner = request.into_inner();
        let detail = Detail {
            snippet: match Snippet::new(req_inner.primary_channel){
                Ok(item) => item,
                Err(e) => return Err(Status::new(Code::Internal, e.to_string()))
            },
            title: req_inner.title,
            locale: "".to_string(),
            description: req_inner.description,
            thumbnail_url: "".to_string(),
            avatar_url: req_inner.avatar_url,
        };

        match detail.put_streamer_detail().await {
            Ok(_) => {
                Ok(Response::new(PutStreamerInfoResponse{ result: i32::from(ValidationResult::Success), reason: "".to_string() }))
            }
            Err(e) => {
                Ok(Response::new(PutStreamerInfoResponse{ result: i32::from(ValidationResult::Success), reason: e.to_string() }))
            }
        }
    }
}

pub async fn run() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50001".parse()?;

    println!("Hello, server: {}", addr);

    Server::builder()
        .add_service(CommonServer::new(CommonImpl::default()))
        .serve(addr)
        .await?;

    Ok(())
}

