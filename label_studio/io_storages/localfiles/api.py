"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from django.utils.decorators import method_decorator
from drf_yasg import openapi as openapi
from drf_yasg.utils import no_body, swagger_auto_schema
from io_storages.api import (
    ExportStorageDetailAPI,
    ExportStorageFormLayoutAPI,
    ExportStorageListAPI,
    ExportStorageSyncAPI,
    ExportStorageValidateAPI,
    ImportStorageDetailAPI,
    ImportStorageFormLayoutAPI,
    ImportStorageListAPI,
    ImportStorageSyncAPI,
    ImportStorageValidateAPI,
)
from io_storages.localfiles.models import LocalFilesExportStorage, LocalFilesImportStorage
from io_storages.localfiles.serializers import LocalFilesExportStorageSerializer, LocalFilesImportStorageSerializer

_local_files_import_storage_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties={
        'project': openapi.Schema(type=openapi.TYPE_INTEGER, description='Project ID'),
        'path': openapi.Schema(type=openapi.TYPE_STRING, description='Local path'),
        'regex_filter': openapi.Schema(type=openapi.TYPE_STRING, description='Regex for filtering objects'),
        'use_blob_urls': openapi.Schema(
            type=openapi.TYPE_BOOLEAN, description='Interpret objects as BLOBs and generate URLs'
        ),
    },
    required=[],
)

_local_files_export_storage_schema = _local_files_import_storage_schema


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='list',
        operation_summary='Get all import storage',
        operation_description='Get a list of all local file import storage connections.',
        manual_parameters=[
            openapi.Parameter(
                name='project',
                type=openapi.TYPE_INTEGER,
                in_=openapi.IN_QUERY,
                description='Project ID',
            ),
        ],
        request_body=no_body,
    ),
)
@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='create',
        operation_summary='Create import storage',
        operation_description='Create a new local file import storage connection.',
        request_body=_local_files_import_storage_schema,
    ),
)
class LocalFilesImportStorageListAPI(ImportStorageListAPI):
    queryset = LocalFilesImportStorage.objects.all()
    serializer_class = LocalFilesImportStorageSerializer


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='get',
        operation_summary='Get import storage',
        operation_description='Get a specific local file import storage connection.',
        request_body=no_body,
    ),
)
@method_decorator(
    name='patch',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='update',
        operation_summary='Update import storage',
        operation_description='Update a specific local file import storage connection.',
        request_body=_local_files_import_storage_schema,
    ),
)
@method_decorator(
    name='delete',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='delete',
        operation_summary='Delete import storage',
        operation_description='Delete a specific local import storage connection.',
        request_body=no_body,
    ),
)
class LocalFilesImportStorageDetailAPI(ImportStorageDetailAPI):
    queryset = LocalFilesImportStorage.objects.all()
    serializer_class = LocalFilesImportStorageSerializer


@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='sync',
        operation_summary='Sync import storage',
        operation_description='Sync tasks from a local file import storage connection.',
        manual_parameters=[
            openapi.Parameter(
                name='id',
                type=openapi.TYPE_INTEGER,
                in_=openapi.IN_PATH,
                description='Storage ID',
            ),
        ],
        request_body=no_body,
    ),
)
class LocalFilesImportStorageSyncAPI(ImportStorageSyncAPI):
    serializer_class = LocalFilesImportStorageSerializer


@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='sync',
        operation_summary='Sync export storage',
        operation_description='Sync tasks from a local file export storage connection.',
        request_body=no_body,
    ),
)
class LocalFilesExportStorageSyncAPI(ExportStorageSyncAPI):
    serializer_class = LocalFilesExportStorageSerializer


@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['import_storage', 'local'],
        x_fern_sdk_method_name='validate',
        operation_summary='Validate import storage',
        operation_description='Validate a specific local file import storage connection.',
        request_body=no_body,
    ),
)
class LocalFilesImportStorageValidateAPI(ImportStorageValidateAPI):
    serializer_class = LocalFilesImportStorageSerializer


@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='validate',
        operation_summary='Validate export storage',
        operation_description='Validate a specific local file export storage connection.',
        request_body=no_body,
    ),
)
class LocalFilesExportStorageValidateAPI(ExportStorageValidateAPI):
    serializer_class = LocalFilesExportStorageSerializer


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='list',
        operation_summary='Get all export storage',
        operation_description='Get a list of all Local export storage connections.',
        manual_parameters=[
            openapi.Parameter(
                name='project',
                type=openapi.TYPE_INTEGER,
                in_=openapi.IN_QUERY,
                description='Project ID',
            ),
        ],
        request_body=no_body,
    ),
)
@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='create',
        operation_summary='Create export storage',
        operation_description='Create a new local file export storage connection to store annotations.',
        request_body=_local_files_export_storage_schema,
    ),
)
class LocalFilesExportStorageListAPI(ExportStorageListAPI):
    queryset = LocalFilesExportStorage.objects.all()
    serializer_class = LocalFilesExportStorageSerializer


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='get',
        operation_summary='Get export storage',
        operation_description='Get a specific local file export storage connection.',
        request_body=no_body,
    ),
)
@method_decorator(
    name='patch',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='update',
        operation_summary='Update export storage',
        operation_description='Update a specific local file export storage connection.',
        request_body=_local_files_export_storage_schema,
    ),
)
@method_decorator(
    name='delete',
    decorator=swagger_auto_schema(
        tags=['Storage: Local'],
        x_fern_sdk_group_name=['export_storage', 'local'],
        x_fern_sdk_method_name='delete',
        operation_summary='Delete export storage',
        operation_description='Delete a specific local file export storage connection.',
        request_body=no_body,
    ),
)
class LocalFilesExportStorageDetailAPI(ExportStorageDetailAPI):
    queryset = LocalFilesExportStorage.objects.all()
    serializer_class = LocalFilesExportStorageSerializer


class LocalFilesImportStorageFormLayoutAPI(ImportStorageFormLayoutAPI):
    pass


class LocalFilesExportStorageFormLayoutAPI(ExportStorageFormLayoutAPI):
    pass
