/**
 * @generated SignedSource<<e438ba885eee38810f2ef5fe4457fca0>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type OptimizationDirection = "MAXIMIZE" | "MINIMIZE" | "NONE";
import { FragmentRefs } from "relay-runtime";
export type ExperimentCompareTable_experiments$data = {
  readonly dataset: {
    readonly datasetEvaluators?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly name: string;
          readonly outputConfigs: ReadonlyArray<{
            readonly __typename: "CategoricalAnnotationConfig";
            readonly name: string;
            readonly optimizationDirection: OptimizationDirection;
            readonly values: ReadonlyArray<{
              readonly label: string;
              readonly score: number | null;
            }>;
          } | {
            readonly __typename: "ContinuousAnnotationConfig";
            readonly lowerBound: number | null;
            readonly name: string;
            readonly optimizationDirection: OptimizationDirection;
            readonly upperBound: number | null;
          } | {
            readonly __typename: "FreeformAnnotationConfig";
            readonly lowerBound: number | null;
            readonly name: string;
            readonly optimizationDirection: OptimizationDirection;
            readonly threshold: number | null;
            readonly upperBound: number | null;
          } | {
            // This will never be '%other', but we need some
            // value in case none of the concrete values match.
            readonly __typename: "%other";
          }>;
        };
      }>;
    };
    readonly experiments?: {
      readonly edges: ReadonlyArray<{
        readonly experiment: {
          readonly annotationSummaries: ReadonlyArray<{
            readonly annotationName: string;
            readonly meanScore: number | null;
          }>;
          readonly averageRunLatencyMs: number | null;
          readonly costSummary: {
            readonly total: {
              readonly cost: number | null;
              readonly tokens: number | null;
            };
          };
          readonly datasetVersion: {
            readonly id: string;
          };
          readonly id: string;
          readonly isBaseline: boolean;
          readonly isEphemeral: boolean;
          readonly metadata: any;
          readonly name: string;
          readonly project: {
            readonly id: string;
          } | null;
          readonly repetitions: number;
          readonly runCount: number;
          readonly sequenceNumber: number;
        };
      }>;
    };
    readonly id: string;
  };
  readonly " $fragmentType": "ExperimentCompareTable_experiments";
};
export type ExperimentCompareTable_experiments$key = {
  readonly " $data"?: ExperimentCompareTable_experiments$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExperimentCompareTable_experiments">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*:: as any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "optimizationDirection",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lowerBound",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "upperBound",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "datasetId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "experimentIds"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExperimentCompareTable_experiments",
  "selections": [
    {
      "alias": "dataset",
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "datasetId"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v0/*:: as any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Variable",
                  "name": "filterIds",
                  "variableName": "experimentIds"
                },
                {
                  "kind": "Literal",
                  "name": "includeEphemeral",
                  "value": true
                }
              ],
              "concreteType": "ExperimentConnection",
              "kind": "LinkedField",
              "name": "experiments",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ExperimentEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": "experiment",
                      "args": null,
                      "concreteType": "Experiment",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v0/*:: as any*/),
                        (v1/*:: as any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "sequenceNumber",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "isBaseline",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "isEphemeral",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "metadata",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "DatasetVersion",
                          "kind": "LinkedField",
                          "name": "datasetVersion",
                          "plural": false,
                          "selections": (v2/*:: as any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Project",
                          "kind": "LinkedField",
                          "name": "project",
                          "plural": false,
                          "selections": (v2/*:: as any*/),
                          "storageKey": null
                        },
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
                                  "name": "cost",
                                  "storageKey": null
                                },
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "tokens",
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
                          "name": "averageRunLatencyMs",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "runCount",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "repetitions",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ExperimentAnnotationSummary",
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
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 100
                }
              ],
              "concreteType": "DatasetEvaluatorConnection",
              "kind": "LinkedField",
              "name": "datasetEvaluators",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DatasetEvaluatorEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "DatasetEvaluator",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v1/*:: as any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": null,
                          "kind": "LinkedField",
                          "name": "outputConfigs",
                          "plural": true,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "__typename",
                              "storageKey": null
                            },
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                (v1/*:: as any*/),
                                (v3/*:: as any*/),
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "CategoricalAnnotationValue",
                                  "kind": "LinkedField",
                                  "name": "values",
                                  "plural": true,
                                  "selections": [
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
                                      "name": "score",
                                      "storageKey": null
                                    }
                                  ],
                                  "storageKey": null
                                }
                              ],
                              "type": "CategoricalAnnotationConfig",
                              "abstractKey": null
                            },
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                (v1/*:: as any*/),
                                (v3/*:: as any*/),
                                (v4/*:: as any*/),
                                (v5/*:: as any*/)
                              ],
                              "type": "ContinuousAnnotationConfig",
                              "abstractKey": null
                            },
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                (v1/*:: as any*/),
                                (v3/*:: as any*/),
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "threshold",
                                  "storageKey": null
                                },
                                (v4/*:: as any*/),
                                (v5/*:: as any*/)
                              ],
                              "type": "FreeformAnnotationConfig",
                              "abstractKey": null
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
              "storageKey": "datasetEvaluators(first:100)"
            }
          ],
          "type": "Dataset",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "331c7e3f10888e22a016d24603af2802";

export default node;
