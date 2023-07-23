from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ValidationResult(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UNKNOWN: _ClassVar[ValidationResult]
    SUCCESS: _ClassVar[ValidationResult]
    FAILURE: _ClassVar[ValidationResult]
UNKNOWN: ValidationResult
SUCCESS: ValidationResult
FAILURE: ValidationResult

class StreamerInfoRequest(_message.Message):
    __slots__ = ["url"]
    URL_FIELD_NUMBER: _ClassVar[int]
    url: str
    def __init__(self, url: _Optional[str] = ...) -> None: ...

class StreamerInfoResponse(_message.Message):
    __slots__ = ["validation_response", "title", "avatar_url", "channel_id"]
    VALIDATION_RESPONSE_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    CHANNEL_ID_FIELD_NUMBER: _ClassVar[int]
    validation_response: ValidationResponse
    title: str
    avatar_url: str
    channel_id: str
    def __init__(self, validation_response: _Optional[_Union[ValidationResponse, _Mapping]] = ..., title: _Optional[str] = ..., avatar_url: _Optional[str] = ..., channel_id: _Optional[str] = ...) -> None: ...

class ValidationResponse(_message.Message):
    __slots__ = ["result", "reason"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    result: ValidationResult
    reason: str
    def __init__(self, result: _Optional[_Union[ValidationResult, str]] = ..., reason: _Optional[str] = ...) -> None: ...
