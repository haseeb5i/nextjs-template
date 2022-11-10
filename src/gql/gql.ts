/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query launches($limit: Int) {\n    launchesPast(limit: $limit) {\n      mission_name\n      links {\n        mission_patch_small\n        mission_patch\n      }\n      launch_year\n      rocket {\n        rocket_name\n      }\n      id\n    }\n  }\n": types.LaunchesDocument,
};

export function graphql(source: "\n  query launches($limit: Int) {\n    launchesPast(limit: $limit) {\n      mission_name\n      links {\n        mission_patch_small\n        mission_patch\n      }\n      launch_year\n      rocket {\n        rocket_name\n      }\n      id\n    }\n  }\n"): (typeof documents)["\n  query launches($limit: Int) {\n    launchesPast(limit: $limit) {\n      mission_name\n      links {\n        mission_patch_small\n        mission_patch\n      }\n      launch_year\n      rocket {\n        rocket_name\n      }\n      id\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;