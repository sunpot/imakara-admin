from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ValidationResult(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UNKNOWN: _ClassVar[ValidationResult]
    SUCCESS: _ClassVar[ValidationResult]
    FAILURE: _ClassVar[ValidationResult]
UNKNOWN: ValidationResult
SUCCESS: ValidationResult
FAILURE: ValidationResult

class ListStreamersRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListStreamersResponse(_message.Message):
    __slots__ = ["streamers"]
    STREAMERS_FIELD_NUMBER: _ClassVar[int]
    streamers: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, streamers: _Optional[_Iterable[str]] = ...) -> None: ...

class ListStreamerInfoRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListStreamerInfoResponse(_message.Message):
    __slots__ = ["ids"]
    IDS_FIELD_NUMBER: _ClassVar[int]
    ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, ids: _Optional[_Iterable[str]] = ...) -> None: ...

class PutStreamerInfoRequest(_message.Message):
    __slots__ = ["title", "description", "avatar_url", "primary_channel"]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_CHANNEL_FIELD_NUMBER: _ClassVar[int]
    title: str
    description: str
    avatar_url: str
    primary_channel: str
    def __init__(self, title: _Optional[str] = ..., description: _Optional[str] = ..., avatar_url: _Optional[str] = ..., primary_channel: _Optional[str] = ...) -> None: ...

class PutStreamerInfoResponse(_message.Message):
    __slots__ = ["result", "reason"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    result: ValidationResult
    reason: str
    def __init__(self, result: _Optional[_Union[ValidationResult, str]] = ..., reason: _Optional[str] = ...) -> None: ...

class StreamerInfoRequest(_message.Message):
    __slots__ = ["url"]
    URL_FIELD_NUMBER: _ClassVar[int]
    url: str
    def __init__(self, url: _Optional[str] = ...) -> None: ...

class StreamerInfoResponse(_message.Message):
    __slots__ = ["validation_response", "title", "avatar_url", "primary_channel"]
    VALIDATION_RESPONSE_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    PRIMARY_CHANNEL_FIELD_NUMBER: _ClassVar[int]
    validation_response: ValidationResponse
    title: str
    avatar_url: str
    primary_channel: str
    def __init__(self, validation_response: _Optional[_Union[ValidationResponse, _Mapping]] = ..., title: _Optional[str] = ..., avatar_url: _Optional[str] = ..., primary_channel: _Optional[str] = ...) -> None: ...

class ValidationResponse(_message.Message):
    __slots__ = ["result", "reason"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    result: ValidationResult
    reason: str
    def __init__(self, result: _Optional[_Union[ValidationResult, str]] = ..., reason: _Optional[str] = ...) -> None: ...
