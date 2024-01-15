import { mergeSchemas } from '@graphql-tools/schema';

import { logsGQLschema } from './log';

// TODO: more schema to be merged
export const mergedGQLSchema = mergeSchemas({ schemas: [logsGQLschema] });
