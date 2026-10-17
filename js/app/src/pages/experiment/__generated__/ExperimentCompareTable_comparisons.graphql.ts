/**
 * @generated SignedSource<<faf5734cc6d9fa001f70011783982bb4>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ExperimentRunAnnotatorKind = "CODE" | "HUMAN" | "LLM";
import { FragmentRefs } from "relay-runtime";
export type ExperimentCompareTable_comparisons$data = {
  readonly compareExperiments: {
    readonly edges: ReadonlyArray<{
      readonly comparison: {
        readonly example: {
          readonly externalId: string | null;
          readonly id: string;
          readonly revision: {
            readonly input: any;
            readonly referenceOutput: any;
          };
        };
        readonly repeatedRunGroups: ReadonlyArray<{
          readonly annotationSummaries: ReadonlyArray<{
            readonly annotationName: string;
            readonly meanScore: number | null;
          }>;
          readonly experimentId: string;
          readonly runs: ReadonlyArray<{
            readonly annotations: {
              readonly edges: ReadonlyArray<{
                readonly annotation: {
                  readonly annotatorKind: ExperimentRunAnnotatorKind;
                  readonly explanation: string | null;
                  readonly id: string;
                  readonly label: string | null;
                  readonly metadata: any;
                  readonly name: string;
                  readonly score: number | null;
                  readonly trace: {
                    readonly projectId: string;
                    readonly traceId: string;
                  } | null;
                };
              }>;
            };
            readonly costSummary: {
              readonly total: {
                readonly cost: number | null;
                readonly tokens: number | null;
              };
            };
            readonly error: string | null;
            readonly id: string;
            readonly latencyMs: number;
            readonly output: any | null;
            readonly repetitionNumber: number;
            readonly trace: {
              readonly projectId: string;
              readonly traceId: string;
            } | null;
          }>;
          readonly " $fragmentSpreads": FragmentRefs<"ExperimentRepeatedRunGroupMetadataFragment">;
        }>;
      };
    }>;
  };
  readonly " $fragmentType": "ExperimentCompareTable_comparisons";
};
export type ExperimentCompareTable_comparisons$key = {
  readonly " $data"?: ExperimentCompareTable_comparisons$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExperimentCompareTable_comparisons">;
};

import ExperimentCompareTableQuery_graphql from './ExperimentCompareTableQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "compareExperiments"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Trace",
  "kind": "LinkedField",
  "name": "trace",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "traceId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "projectId",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "baseExperimentId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "compareExperimentIds"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "filterCondition"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*:: as any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*:: as any*/)
      },
      "fragmentPathInResult": [],
      "operation": ExperimentCompareTableQuery_graphql
    }
  },
  "name": "ExperimentCompareTable_comparisons",
  "selections": [
    {
      "alias": "compareExperiments",
      "args": [
        {
          "kind": "Variable",
          "name": "baseExperimentId",
          "variableName": "baseExperimentId"
        },
        {
          "kind": "Variable",
          "name": "compareExperimentIds",
          "variableName": "compareExperimentIds"
        },
        {
          "kind": "Variable",
          "name": "filterCondition",
          "variableName": "filterCondition"
        }
      ],
      "concreteType": "ExperimentComparisonConnection",
      "kind": "LinkedField",
      "name": "__ExperimentCompareTable_compareExperiments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ExperimentComparisonEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": "comparison",
              "args": null,
              "concreteType": "ExperimentComparison",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DatasetExample",
                  "kind": "LinkedField",
                  "name": "example",
                  "plural": false,
                  "selections": [
                    (v1/*:: as any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "externalId",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "DatasetExampleRevision",
                      "kind": "LinkedField",
                      "name": "revision",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "input",
                          "storageKey": null
                        },
                        {
                          "alias": "referenceOutput",
                          "args": null,
                          "kind": "ScalarField",
                          "name": "output",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ExperimentRepeatedRunGroup",
                  "kind": "LinkedField",
                  "name": "repeatedRunGroups",
                  "plural": true,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ExperimentRepeatedRunGroupMetadataFragment"
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ExperimentRepeatedRunGroupAnnotationSummary",
                      "kind": "LinkedField",
                      "name": "annotationSummaries",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "annotationName",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "meanScore",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "experimentId",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ExperimentRun",
                      "kind": "LinkedField",
                      "name": "runs",
                      "plural": true,
                      "selections": [
                        (v1/*:: as any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "latencyMs",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "repetitionNumber",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "output",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "error",
                          "storageKey": null
                        },
                        (v2/*:: as any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "SpanCostSummary",
                          "kind": "LinkedField",
                          "name": "costSummary",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "CostBreakdown",
                              "kind": "LinkedField",
                              "name": "total",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "tokens",
                                  "storageKey": null
                                },
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "cost",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ExperimentRunAnnotationConnection",
                          "kind": "LinkedField",
                          "name": "annotations",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ExperimentRunAnnotationEdge",
                              "kind": "LinkedField",
                              "name": "edges",
                              "plural": true,
                              "selections": [
                                {
                                  "alias": "annotation",
                                  "args": null,
                                  "concreteType": "ExperimentRunAnnotation",
                                  "kind": "LinkedField",
                                  "name": "node",
                                  "plural": false,
                                  "selections": [
                                    (v1/*:: as any*/),
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "name",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "score",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "label",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "annotatorKind",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "explanation",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "metadata",
                                      "storageKey": null
                                    },
                                    (v2/*:: as any*/)
                                  ],
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ExperimentComparison",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "0ecd90973ad7131ca0bad77b6665ed0d";

export default node;
