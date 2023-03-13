declare const _default: {
  contractName: string;
  abi: (
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
      }
    | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
      }
    | {
        anonymous: boolean;
        inputs: {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
      }
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        outputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
      }
  )[];
  metadata: string;
  bytecode: string;
  deployedBytecode: string;
  immutableReferences: {};
  generatedSources: {
    ast: {
      nodeType: string;
      src: string;
      statements: (
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                nodeType: string;
                src: string;
                value: {
                  arguments: {
                    kind: string;
                    nodeType: string;
                    src: string;
                    type: string;
                    value: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                variableNames: {
                  name: string;
                  nodeType: string;
                  src: string;
                }[];
              }[];
            };
            name: string;
            nodeType: string;
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            parameters?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                expression: {
                  arguments: {
                    kind: string;
                    nodeType: string;
                    src: string;
                    type: string;
                    value: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            src: string;
            returnVariables?: undefined;
            parameters?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    expression?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        arguments: (
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              kind?: undefined;
                              type?: undefined;
                              value?: undefined;
                            }
                          | {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                              name?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      kind: string;
                      nodeType: string;
                      src: string;
                      type: string;
                      value: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: (
                            | {
                                arguments: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              }
                            | {
                                arguments: {
                                  arguments: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    post: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    pre: {
                      nodeType: string;
                      src: string;
                      statements: never[];
                    };
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: (
                            | {
                                arguments: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                arguments?: undefined;
                                functionName?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        arguments: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    expression: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    expression?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        arguments: (
                          | {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                              name?: undefined;
                            }
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              arguments?: undefined;
                              functionName?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                body: {
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      arguments: {
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }[];
                };
                condition: {
                  arguments: {
                    arguments: (
                      | {
                          name: string;
                          nodeType: string;
                          src: string;
                          arguments?: undefined;
                          functionName?: undefined;
                        }
                      | {
                          arguments: {
                            name: string;
                            nodeType: string;
                            src: string;
                          }[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                          name?: undefined;
                        }
                    )[];
                    functionName: {
                      name: string;
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        arguments: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    expression: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: (
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              name: string;
                              nodeType: string;
                              src: string;
                              arguments?: undefined;
                              functionName?: undefined;
                            };
                            variables: {
                              name: string;
                              nodeType: string;
                              src: string;
                              type: string;
                            }[];
                            expression?: undefined;
                            variableNames?: undefined;
                          }
                        | {
                            expression: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    arguments?: undefined;
                                    functionName?: undefined;
                                  }
                                | {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            value?: undefined;
                            variables?: undefined;
                            variableNames?: undefined;
                          }
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                              name?: undefined;
                            };
                            variableNames: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            variables?: undefined;
                            expression?: undefined;
                          }
                      )[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    post: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    pre: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        variables: {
                          name: string;
                          nodeType: string;
                          src: string;
                          type: string;
                        }[];
                      }[];
                    };
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    statements?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    statements: (
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            arguments: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          variables: {
                            name: string;
                            nodeType: string;
                            src: string;
                            type: string;
                          }[];
                          body?: undefined;
                          condition?: undefined;
                          variableNames?: undefined;
                        }
                      | {
                          body: {
                            nodeType: string;
                            src: string;
                            statements: {
                              expression: {
                                arguments: never[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            }[];
                          };
                          condition: {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                          value?: undefined;
                          variables?: undefined;
                          variableNames?: undefined;
                        }
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            arguments: (
                              | {
                                  arguments: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  name?: undefined;
                                }
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          variableNames: {
                            name: string;
                            nodeType: string;
                            src: string;
                          }[];
                          variables?: undefined;
                          body?: undefined;
                          condition?: undefined;
                        }
                    )[];
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                expression: {
                  arguments: (
                    | {
                        arguments: (
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              kind?: undefined;
                              type?: undefined;
                              value?: undefined;
                            }
                          | {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                              name?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        hexValue?: undefined;
                        kind?: undefined;
                        type?: undefined;
                        value?: undefined;
                      }
                    | {
                        hexValue: string;
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                        arguments?: undefined;
                        functionName?: undefined;
                      }
                  )[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    expression?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                  }
                | {
                    expression: {
                      arguments: {
                        arguments: (
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              kind?: undefined;
                              type?: undefined;
                              value?: undefined;
                            }
                          | {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                              name?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
      )[];
    };
    contents: string;
    id: number;
    language: string;
    name: string;
    db: {
      source: {
        id: string;
      };
    };
  }[];
  deployedGeneratedSources: {
    ast: {
      nodeType: string;
      src: string;
      statements: (
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                nodeType: string;
                src: string;
                value: {
                  arguments: {
                    kind: string;
                    nodeType: string;
                    src: string;
                    type: string;
                    value: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                variableNames: {
                  name: string;
                  nodeType: string;
                  src: string;
                }[];
              }[];
            };
            name: string;
            nodeType: string;
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            parameters?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                expression: {
                  arguments: {
                    kind: string;
                    nodeType: string;
                    src: string;
                    type: string;
                    value: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            src: string;
            returnVariables?: undefined;
            parameters?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                body: {
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      arguments: {
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }[];
                };
                condition: {
                  arguments: {
                    arguments: (
                      | {
                          name: string;
                          nodeType: string;
                          src: string;
                          arguments?: undefined;
                          functionName?: undefined;
                        }
                      | {
                          arguments: {
                            name: string;
                            nodeType: string;
                            src: string;
                          }[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                          name?: undefined;
                        }
                    )[];
                    functionName: {
                      name: string;
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                expression: {
                  arguments: (
                    | {
                        name: string;
                        nodeType: string;
                        src: string;
                        arguments?: undefined;
                        functionName?: undefined;
                      }
                    | {
                        arguments: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        name?: undefined;
                      }
                  )[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    expression?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        arguments: (
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              kind?: undefined;
                              type?: undefined;
                              value?: undefined;
                            }
                          | {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                              name?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    expression: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        arguments: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    expression: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    expression?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        arguments: (
                          | {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                              name?: undefined;
                            }
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              arguments?: undefined;
                              functionName?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      kind: string;
                      nodeType: string;
                      src: string;
                      type: string;
                      value: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: (
                            | {
                                arguments: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              }
                            | {
                                arguments: {
                                  arguments: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    post: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    pre: {
                      nodeType: string;
                      src: string;
                      statements: never[];
                    };
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: (
                            | {
                                arguments: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                }[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                arguments?: undefined;
                                functionName?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    expression?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        arguments: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    expression: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    expression?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: (
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              name: string;
                              nodeType: string;
                              src: string;
                              arguments?: undefined;
                              functionName?: undefined;
                            };
                            variables: {
                              name: string;
                              nodeType: string;
                              src: string;
                              type: string;
                            }[];
                            expression?: undefined;
                            variableNames?: undefined;
                          }
                        | {
                            expression: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    arguments?: undefined;
                                    functionName?: undefined;
                                  }
                                | {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            value?: undefined;
                            variables?: undefined;
                            variableNames?: undefined;
                          }
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                              name?: undefined;
                            };
                            variableNames: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            variables?: undefined;
                            expression?: undefined;
                          }
                      )[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    post: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    pre: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        variables: {
                          name: string;
                          nodeType: string;
                          src: string;
                          type: string;
                        }[];
                      }[];
                    };
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                    expression?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    statements?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    statements: (
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          };
                          variables: {
                            name: string;
                            nodeType: string;
                            src: string;
                            type: string;
                          }[];
                          variableNames?: undefined;
                        }
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            arguments: (
                              | {
                                  arguments: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  name?: undefined;
                                }
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          };
                          variableNames: {
                            name: string;
                            nodeType: string;
                            src: string;
                          }[];
                          variables?: undefined;
                        }
                    )[];
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    statements: (
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            arguments: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          variables: {
                            name: string;
                            nodeType: string;
                            src: string;
                            type: string;
                          }[];
                          body?: undefined;
                          condition?: undefined;
                          variableNames?: undefined;
                        }
                      | {
                          body: {
                            nodeType: string;
                            src: string;
                            statements: {
                              expression: {
                                arguments: never[];
                                functionName: {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                };
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            }[];
                          };
                          condition: {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                          value?: undefined;
                          variables?: undefined;
                          variableNames?: undefined;
                        }
                      | {
                          nodeType: string;
                          src: string;
                          value: {
                            arguments: (
                              | {
                                  arguments: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  name?: undefined;
                                }
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          };
                          variableNames: {
                            name: string;
                            nodeType: string;
                            src: string;
                          }[];
                          variables?: undefined;
                          body?: undefined;
                          condition?: undefined;
                        }
                    )[];
                    body?: undefined;
                    condition?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: (
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              arguments: {
                                name: string;
                                nodeType: string;
                                src: string;
                              }[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            };
                            variables: {
                              name: string;
                              nodeType: string;
                              src: string;
                              type: string;
                            }[];
                            variableNames?: undefined;
                          }
                        | {
                            nodeType: string;
                            src: string;
                            value: {
                              arguments: {
                                name: string;
                                nodeType: string;
                                src: string;
                              }[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            };
                            variableNames: {
                              name: string;
                              nodeType: string;
                              src: string;
                            }[];
                            variables?: undefined;
                          }
                      )[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    post: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    pre: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          kind: string;
                          nodeType: string;
                          src: string;
                          type: string;
                          value: string;
                        };
                        variables: {
                          name: string;
                          nodeType: string;
                          src: string;
                          type: string;
                        }[];
                      }[];
                    };
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                    post?: undefined;
                    pre?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                expression: {
                  arguments: (
                    | {
                        arguments: (
                          | {
                              name: string;
                              nodeType: string;
                              src: string;
                              kind?: undefined;
                              type?: undefined;
                              value?: undefined;
                            }
                          | {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                              name?: undefined;
                            }
                        )[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        hexValue?: undefined;
                        kind?: undefined;
                        type?: undefined;
                        value?: undefined;
                      }
                    | {
                        hexValue: string;
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                        arguments?: undefined;
                        functionName?: undefined;
                      }
                  )[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            returnVariables?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    body?: undefined;
                    condition?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: (
                            | {
                                name: string;
                                nodeType: string;
                                src: string;
                                kind?: undefined;
                                type?: undefined;
                                value?: undefined;
                              }
                            | {
                                kind: string;
                                nodeType: string;
                                src: string;
                                type: string;
                                value: string;
                                name?: undefined;
                              }
                          )[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                      }[];
                    };
                    condition: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        expression: {
                          arguments: never[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    expression?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    variableNames?: undefined;
                    cases?: undefined;
                    expression?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: {
                        name: string;
                        nodeType: string;
                        src: string;
                      }[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    variables?: undefined;
                    cases?: undefined;
                    expression?: undefined;
                  }
                | {
                    cases: (
                      | {
                          body: {
                            nodeType: string;
                            src: string;
                            statements: (
                              | {
                                  expression: {
                                    arguments: (
                                      | {
                                          name: string;
                                          nodeType: string;
                                          src: string;
                                          arguments?: undefined;
                                          functionName?: undefined;
                                        }
                                      | {
                                          arguments: (
                                            | {
                                                name: string;
                                                nodeType: string;
                                                src: string;
                                                arguments?: undefined;
                                                functionName?: undefined;
                                              }
                                            | {
                                                arguments: {
                                                  kind: string;
                                                  nodeType: string;
                                                  src: string;
                                                  type: string;
                                                  value: string;
                                                }[];
                                                functionName: {
                                                  name: string;
                                                  nodeType: string;
                                                  src: string;
                                                };
                                                nodeType: string;
                                                src: string;
                                                name?: undefined;
                                              }
                                          )[];
                                          functionName: {
                                            name: string;
                                            nodeType: string;
                                            src: string;
                                          };
                                          nodeType: string;
                                          src: string;
                                          name?: undefined;
                                        }
                                    )[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  value?: undefined;
                                  variableNames?: undefined;
                                }
                              | {
                                  nodeType: string;
                                  src: string;
                                  value: {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                  };
                                  variableNames: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  expression?: undefined;
                                }
                            )[];
                          };
                          nodeType: string;
                          src: string;
                          value: {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                          };
                        }
                      | {
                          body: {
                            nodeType: string;
                            src: string;
                            statements: (
                              | {
                                  nodeType: string;
                                  src: string;
                                  value: {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  };
                                  variables: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                  }[];
                                  body?: undefined;
                                  condition?: undefined;
                                  post?: undefined;
                                  pre?: undefined;
                                  variableNames?: undefined;
                                }
                              | {
                                  nodeType: string;
                                  src: string;
                                  value: {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    arguments?: undefined;
                                    functionName?: undefined;
                                  };
                                  variables: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                  }[];
                                  body?: undefined;
                                  condition?: undefined;
                                  post?: undefined;
                                  pre?: undefined;
                                  variableNames?: undefined;
                                }
                              | {
                                  body: {
                                    nodeType: string;
                                    src: string;
                                    statements: (
                                      | {
                                          expression: {
                                            arguments: {
                                              arguments: {
                                                name: string;
                                                nodeType: string;
                                                src: string;
                                              }[];
                                              functionName: {
                                                name: string;
                                                nodeType: string;
                                                src: string;
                                              };
                                              nodeType: string;
                                              src: string;
                                            }[];
                                            functionName: {
                                              name: string;
                                              nodeType: string;
                                              src: string;
                                            };
                                            nodeType: string;
                                            src: string;
                                          };
                                          nodeType: string;
                                          src: string;
                                          value?: undefined;
                                          variableNames?: undefined;
                                        }
                                      | {
                                          nodeType: string;
                                          src: string;
                                          value: {
                                            arguments: (
                                              | {
                                                  name: string;
                                                  nodeType: string;
                                                  src: string;
                                                  kind?: undefined;
                                                  type?: undefined;
                                                  value?: undefined;
                                                }
                                              | {
                                                  kind: string;
                                                  nodeType: string;
                                                  src: string;
                                                  type: string;
                                                  value: string;
                                                  name?: undefined;
                                                }
                                            )[];
                                            functionName: {
                                              name: string;
                                              nodeType: string;
                                              src: string;
                                            };
                                            nodeType: string;
                                            src: string;
                                          };
                                          variableNames: {
                                            name: string;
                                            nodeType: string;
                                            src: string;
                                          }[];
                                          expression?: undefined;
                                        }
                                    )[];
                                  };
                                  condition: {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  post: {
                                    nodeType: string;
                                    src: string;
                                    statements: {
                                      nodeType: string;
                                      src: string;
                                      value: {
                                        arguments: (
                                          | {
                                              name: string;
                                              nodeType: string;
                                              src: string;
                                              kind?: undefined;
                                              type?: undefined;
                                              value?: undefined;
                                            }
                                          | {
                                              kind: string;
                                              nodeType: string;
                                              src: string;
                                              type: string;
                                              value: string;
                                              name?: undefined;
                                            }
                                        )[];
                                        functionName: {
                                          name: string;
                                          nodeType: string;
                                          src: string;
                                        };
                                        nodeType: string;
                                        src: string;
                                      };
                                      variableNames: {
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                      }[];
                                    }[];
                                  };
                                  pre: {
                                    nodeType: string;
                                    src: string;
                                    statements: never[];
                                  };
                                  src: string;
                                  value?: undefined;
                                  variables?: undefined;
                                  variableNames?: undefined;
                                }
                              | {
                                  nodeType: string;
                                  src: string;
                                  value: {
                                    arguments: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    }[];
                                    functionName: {
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                    };
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  };
                                  variableNames: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  }[];
                                  variables?: undefined;
                                  body?: undefined;
                                  condition?: undefined;
                                  post?: undefined;
                                  pre?: undefined;
                                }
                            )[];
                          };
                          nodeType: string;
                          src: string;
                          value: {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                          };
                        }
                    )[];
                    expression: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            parameters: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: {
                body: {
                  nodeType: string;
                  src: string;
                  statements: (
                    | {
                        expression: {
                          arguments: {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                          }[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        value?: undefined;
                        variableNames?: undefined;
                      }
                    | {
                        nodeType: string;
                        src: string;
                        value: {
                          arguments: {
                            arguments: {
                              kind: string;
                              nodeType: string;
                              src: string;
                              type: string;
                              value: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          }[];
                          functionName: {
                            name: string;
                            nodeType: string;
                            src: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        variableNames: {
                          name: string;
                          nodeType: string;
                          src: string;
                        }[];
                        expression?: undefined;
                      }
                  )[];
                };
                condition: {
                  arguments: (
                    | {
                        arguments: never[];
                        functionName: {
                          name: string;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        kind?: undefined;
                        type?: undefined;
                        value?: undefined;
                      }
                    | {
                        kind: string;
                        nodeType: string;
                        src: string;
                        type: string;
                        value: string;
                        arguments?: undefined;
                        functionName?: undefined;
                      }
                  )[];
                  functionName: {
                    name: string;
                    nodeType: string;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                };
                nodeType: string;
                src: string;
              }[];
            };
            name: string;
            nodeType: string;
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            parameters?: undefined;
          }
        | {
            body: {
              nodeType: string;
              src: string;
              statements: (
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: never[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    expression?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  arguments: never[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    body?: undefined;
                    condition?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          }
                        | {
                            arguments: {
                              arguments: (
                                | {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    kind?: undefined;
                                    type?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    kind: string;
                                    nodeType: string;
                                    src: string;
                                    type: string;
                                    value: string;
                                    name?: undefined;
                                  }
                              )[];
                              functionName: {
                                name: string;
                                nodeType: string;
                                src: string;
                              };
                              nodeType: string;
                              src: string;
                            }[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    expression?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            kind?: undefined;
                            type?: undefined;
                            value?: undefined;
                          }
                        | {
                            kind: string;
                            nodeType: string;
                            src: string;
                            type: string;
                            value: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    expression?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      arguments: (
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  kind?: undefined;
                                  type?: undefined;
                                  value?: undefined;
                                }
                              | {
                                  kind: string;
                                  nodeType: string;
                                  src: string;
                                  type: string;
                                  value: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                      name?: undefined;
                    };
                    variables: {
                      name: string;
                      nodeType: string;
                      src: string;
                      type: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    expression?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    body: {
                      nodeType: string;
                      src: string;
                      statements: {
                        nodeType: string;
                        src: string;
                      }[];
                    };
                    condition: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                              | {
                                  arguments: (
                                    | {
                                        arguments: never[];
                                        functionName: {
                                          name: string;
                                          nodeType: string;
                                          src: string;
                                        };
                                        nodeType: string;
                                        src: string;
                                        kind?: undefined;
                                        type?: undefined;
                                        value?: undefined;
                                      }
                                    | {
                                        kind: string;
                                        nodeType: string;
                                        src: string;
                                        type: string;
                                        value: string;
                                        arguments?: undefined;
                                        functionName?: undefined;
                                      }
                                  )[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    expression?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    expression: {
                      arguments: (
                        | {
                            name: string;
                            nodeType: string;
                            src: string;
                            arguments?: undefined;
                            functionName?: undefined;
                          }
                        | {
                            arguments: (
                              | {
                                  name: string;
                                  nodeType: string;
                                  src: string;
                                  arguments?: undefined;
                                  functionName?: undefined;
                                }
                              | {
                                  arguments: (
                                    | {
                                        kind: string;
                                        nodeType: string;
                                        src: string;
                                        type: string;
                                        value: string;
                                        name?: undefined;
                                      }
                                    | {
                                        name: string;
                                        nodeType: string;
                                        src: string;
                                        kind?: undefined;
                                        type?: undefined;
                                        value?: undefined;
                                      }
                                  )[];
                                  functionName: {
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                  };
                                  nodeType: string;
                                  src: string;
                                  name?: undefined;
                                }
                            )[];
                            functionName: {
                              name: string;
                              nodeType: string;
                              src: string;
                            };
                            nodeType: string;
                            src: string;
                            name?: undefined;
                          }
                      )[];
                      functionName: {
                        name: string;
                        nodeType: string;
                        src: string;
                      };
                      nodeType: string;
                      src: string;
                    };
                    nodeType: string;
                    src: string;
                    body?: undefined;
                    condition?: undefined;
                    value?: undefined;
                    variables?: undefined;
                    variableNames?: undefined;
                  }
                | {
                    nodeType: string;
                    src: string;
                    value: {
                      name: string;
                      nodeType: string;
                      src: string;
                      arguments?: undefined;
                      functionName?: undefined;
                    };
                    variableNames: {
                      name: string;
                      nodeType: string;
                      src: string;
                    }[];
                    body?: undefined;
                    condition?: undefined;
                    expression?: undefined;
                    variables?: undefined;
                  }
              )[];
            };
            name: string;
            nodeType: string;
            returnVariables: {
              name: string;
              nodeType: string;
              src: string;
              type: string;
            }[];
            src: string;
            parameters?: undefined;
          }
      )[];
    };
    contents: string;
    id: number;
    language: string;
    name: string;
    db: {
      source: {
        id: string;
      };
    };
  }[];
  sourceMap: string;
  deployedSourceMap: string;
  source: string;
  sourcePath: string;
  ast: {
    absolutePath: string;
    exportedSymbols: {
      AccessControl: number[];
      Address: number[];
      BaseURIIsEmpty: number[];
      Context: number[];
      ContractURIIsEmpty: number[];
      ERC1155: number[];
      ERC1155Mintable: number[];
      ERC165: number[];
      ERC2981: number[];
      IAccessControl: number[];
      IERC1155: number[];
      IERC1155MetadataURI: number[];
      IERC1155Receiver: number[];
      IERC165: number[];
      IERC2981: number[];
      Ownable: number[];
      Strings: number[];
    };
    id: number;
    license: string;
    nodeType: string;
    nodes: (
      | {
          id: number;
          literals: string[];
          nodeType: string;
          src: string;
          absolutePath?: undefined;
          file?: undefined;
          nameLocation?: undefined;
          scope?: undefined;
          sourceUnit?: undefined;
          symbolAliases?: undefined;
          unitAlias?: undefined;
          documentation?: undefined;
          errorSelector?: undefined;
          name?: undefined;
          parameters?: undefined;
          abstract?: undefined;
          baseContracts?: undefined;
          canonicalName?: undefined;
          contractDependencies?: undefined;
          contractKind?: undefined;
          fullyImplemented?: undefined;
          linearizedBaseContracts?: undefined;
          nodes?: undefined;
          usedErrors?: undefined;
        }
      | {
          absolutePath: string;
          file: string;
          id: number;
          nameLocation: string;
          nodeType: string;
          scope: number;
          sourceUnit: number;
          src: string;
          symbolAliases: never[];
          unitAlias: string;
          literals?: undefined;
          documentation?: undefined;
          errorSelector?: undefined;
          name?: undefined;
          parameters?: undefined;
          abstract?: undefined;
          baseContracts?: undefined;
          canonicalName?: undefined;
          contractDependencies?: undefined;
          contractKind?: undefined;
          fullyImplemented?: undefined;
          linearizedBaseContracts?: undefined;
          nodes?: undefined;
          usedErrors?: undefined;
        }
      | {
          documentation: {
            id: number;
            nodeType: string;
            src: string;
            text: string;
          };
          errorSelector: string;
          id: number;
          name: string;
          nameLocation: string;
          nodeType: string;
          parameters: {
            id: number;
            nodeType: string;
            parameters: never[];
            src: string;
          };
          src: string;
          literals?: undefined;
          absolutePath?: undefined;
          file?: undefined;
          scope?: undefined;
          sourceUnit?: undefined;
          symbolAliases?: undefined;
          unitAlias?: undefined;
          abstract?: undefined;
          baseContracts?: undefined;
          canonicalName?: undefined;
          contractDependencies?: undefined;
          contractKind?: undefined;
          fullyImplemented?: undefined;
          linearizedBaseContracts?: undefined;
          nodes?: undefined;
          usedErrors?: undefined;
        }
      | {
          abstract: boolean;
          baseContracts: {
            baseName: {
              id: number;
              name: string;
              nodeType: string;
              referencedDeclaration: number;
              src: string;
            };
            id: number;
            nodeType: string;
            src: string;
          }[];
          canonicalName: string;
          contractDependencies: never[];
          contractKind: string;
          fullyImplemented: boolean;
          id: number;
          linearizedBaseContracts: number[];
          name: string;
          nameLocation: string;
          nodeType: string;
          nodes: (
            | {
                global: boolean;
                id: number;
                libraryName: {
                  id: number;
                  name: string;
                  nodeType: string;
                  referencedDeclaration: number;
                  src: string;
                };
                nodeType: string;
                src: string;
                typeName: {
                  id: number;
                  name: string;
                  nodeType: string;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  keyType?: undefined;
                  valueType?: undefined;
                };
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                name?: undefined;
                nameLocation?: undefined;
                scope?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                visibility?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                constant: boolean;
                functionSelector: string;
                id: number;
                mutability: string;
                name: string;
                nameLocation: string;
                nodeType: string;
                scope: number;
                src: string;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                  typeIdentifier: string;
                  typeString: string;
                };
                typeName: {
                  id: number;
                  name: string;
                  nodeType: string;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  keyType?: undefined;
                  valueType?: undefined;
                };
                value: {
                  arguments: {
                    hexValue: string;
                    id: number;
                    isConstant: boolean;
                    isLValue: boolean;
                    isPure: boolean;
                    kind: string;
                    lValueRequested: boolean;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    value: string;
                  }[];
                  expression: {
                    argumentTypes: {
                      typeIdentifier: string;
                      typeString: string;
                    }[];
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  };
                  id: number;
                  isConstant: boolean;
                  isLValue: boolean;
                  isPure: boolean;
                  kind: string;
                  lValueRequested: boolean;
                  names: never[];
                  nodeType: string;
                  src: string;
                  tryCall: boolean;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                };
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                constant: boolean;
                id: number;
                mutability: string;
                name: string;
                nameLocation: string;
                nodeType: string;
                scope: number;
                src: string;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                  typeIdentifier: string;
                  typeString: string;
                };
                typeName: {
                  id: number;
                  name: string;
                  nodeType: string;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  keyType?: undefined;
                  valueType?: undefined;
                };
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                functionSelector?: undefined;
                value?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                constant: boolean;
                id: number;
                mutability: string;
                name: string;
                nameLocation: string;
                nodeType: string;
                scope: number;
                src: string;
                stateVariable: boolean;
                storageLocation: string;
                typeDescriptions: {
                  typeIdentifier: string;
                  typeString: string;
                };
                typeName: {
                  id: number;
                  keyType: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  };
                  nodeType: string;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  valueType: {
                    id: number;
                    name: string;
                    nodeType: string;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  };
                  name?: undefined;
                };
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                functionSelector?: undefined;
                value?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: (
                    | {
                        condition: {
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          nodeType: string;
                          operator: string;
                          prefix: boolean;
                          src: string;
                          subExpression: {
                            components: {
                              commonType: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              lValueRequested: boolean;
                              leftExpression: {
                                expression: {
                                  arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                  }[];
                                  expression: {
                                    argumentTypes: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                    typeName: {
                                      id: number;
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                      typeDescriptions: {};
                                    };
                                  };
                                  id: number;
                                  isConstant: boolean;
                                  isLValue: boolean;
                                  isPure: boolean;
                                  kind: string;
                                  lValueRequested: boolean;
                                  names: never[];
                                  nodeType: string;
                                  src: string;
                                  tryCall: boolean;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              nodeType: string;
                              operator: string;
                              rightExpression: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                value: string;
                              };
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            }[];
                            id: number;
                            isConstant: boolean;
                            isInlineArray: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
                              arguments: never[];
                              expression: {
                                argumentTypes: never[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              kind: string;
                              lValueRequested: boolean;
                              names: never[];
                              nodeType: string;
                              src: string;
                              tryCall: boolean;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                          }[];
                        };
                        expression?: undefined;
                      }
                    | {
                        expression: {
                          arguments: (
                            | {
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                expression?: undefined;
                                isConstant?: undefined;
                                isLValue?: undefined;
                                isPure?: undefined;
                                lValueRequested?: undefined;
                                memberName?: undefined;
                              }
                            | {
                                expression: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                              }
                          )[];
                          expression: {
                            argumentTypes: {
                              typeIdentifier: string;
                              typeString: string;
                            }[];
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          kind: string;
                          lValueRequested: boolean;
                          names: never[];
                          nodeType: string;
                          src: string;
                          tryCall: boolean;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          leftHandSide?: undefined;
                          operator?: undefined;
                          rightHandSide?: undefined;
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        trueBody?: undefined;
                      }
                    | {
                        expression: {
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          leftHandSide: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          nodeType: string;
                          operator: string;
                          rightHandSide: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          arguments?: undefined;
                          expression?: undefined;
                          kind?: undefined;
                          names?: undefined;
                          tryCall?: undefined;
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        trueBody?: undefined;
                      }
                  )[];
                };
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: {
                  arguments: {
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  }[];
                  id: number;
                  kind: string;
                  modifierName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                }[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: (
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          id: number;
                          name: string;
                          nodeType: string;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          baseType?: undefined;
                        };
                        visibility: string;
                      }
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          baseType: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          nodeType: string;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          name?: undefined;
                        };
                        visibility: string;
                      }
                  )[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                functionSelector?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      arguments: (
                        | {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            hexValue?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            value?: undefined;
                          }
                        | {
                            hexValue: string;
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            value: string;
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
                          }
                      )[];
                      expression: {
                        argumentTypes: {
                          typeIdentifier: string;
                          typeString: string;
                        }[];
                        id: number;
                        name: string;
                        nodeType: string;
                        overloadedDeclarations: never[];
                        referencedDeclaration: number;
                        src: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                      };
                      id: number;
                      isConstant: boolean;
                      isLValue: boolean;
                      isPure: boolean;
                      kind: string;
                      lValueRequested: boolean;
                      names: never[];
                      nodeType: string;
                      src: string;
                      tryCall: boolean;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    id: number;
                    nodeType: string;
                    src: string;
                  }[];
                };
                documentation: {
                  id: number;
                  nodeType: string;
                  src: string;
                  text: string;
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: {
                  arguments: {
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  }[];
                  id: number;
                  kind: string;
                  modifierName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                }[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: (
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          id: number;
                          name: string;
                          nodeType: string;
                          src: string;
                          stateMutability: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        visibility: string;
                      }
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          id: number;
                          name: string;
                          nodeType: string;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          stateMutability?: undefined;
                        };
                        visibility: string;
                      }
                  )[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      arguments: (
                        | {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            hexValue?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            value?: undefined;
                          }
                        | {
                            hexValue: string;
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            value: string;
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
                          }
                      )[];
                      expression: {
                        argumentTypes: {
                          typeIdentifier: string;
                          typeString: string;
                        }[];
                        id: number;
                        name: string;
                        nodeType: string;
                        overloadedDeclarations: never[];
                        referencedDeclaration: number;
                        src: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                      };
                      id: number;
                      isConstant: boolean;
                      isLValue: boolean;
                      isPure: boolean;
                      kind: string;
                      lValueRequested: boolean;
                      names: never[];
                      nodeType: string;
                      src: string;
                      tryCall: boolean;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    id: number;
                    nodeType: string;
                    src: string;
                  }[];
                };
                documentation: {
                  id: number;
                  nodeType: string;
                  src: string;
                  text: string;
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: {
                  arguments: {
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  }[];
                  id: number;
                  kind: string;
                  modifierName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                }[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: (
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          id: number;
                          name: string;
                          nodeType: string;
                          src: string;
                          stateMutability: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          baseType?: undefined;
                        };
                        visibility: string;
                      }
                    | {
                        constant: boolean;
                        id: number;
                        mutability: string;
                        name: string;
                        nameLocation: string;
                        nodeType: string;
                        scope: number;
                        src: string;
                        stateVariable: boolean;
                        storageLocation: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                        typeName: {
                          baseType: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          nodeType: string;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          name?: undefined;
                          stateMutability?: undefined;
                        };
                        visibility: string;
                      }
                  )[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: (
                    | {
                        assignments: number[];
                        declarations: {
                          constant: boolean;
                          id: number;
                          mutability: string;
                          name: string;
                          nameLocation: string;
                          nodeType: string;
                          scope: number;
                          src: string;
                          stateVariable: boolean;
                          storageLocation: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          typeName: {
                            id: number;
                            name: string;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          visibility: string;
                        }[];
                        id: number;
                        initialValue: {
                          expression: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          memberName: string;
                          nodeType: string;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        nodeType: string;
                        src: string;
                        body?: undefined;
                        condition?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
                    | {
                        body: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            expression: {
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              lValueRequested: boolean;
                              leftHandSide: {
                                baseExpression: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                indexExpression: {
                                  baseExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                  };
                                  id: number;
                                  indexExpression: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                  };
                                  isConstant: boolean;
                                  isLValue: boolean;
                                  isPure: boolean;
                                  lValueRequested: boolean;
                                  nodeType: string;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              nodeType: string;
                              operator: string;
                              rightHandSide: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                value: string;
                              };
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                          }[];
                        };
                        condition: {
                          commonType: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          leftExpression: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          nodeType: string;
                          operator: string;
                          rightExpression: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        id: number;
                        initializationExpression: {
                          assignments: number[];
                          declarations: {
                            constant: boolean;
                            id: number;
                            mutability: string;
                            name: string;
                            nameLocation: string;
                            nodeType: string;
                            scope: number;
                            src: string;
                            stateVariable: boolean;
                            storageLocation: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            typeName: {
                              id: number;
                              name: string;
                              nodeType: string;
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            visibility: string;
                          }[];
                          id: number;
                          initialValue: {
                            hexValue: string;
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            value: string;
                          };
                          nodeType: string;
                          src: string;
                        };
                        loopExpression: {
                          expression: {
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            nodeType: string;
                            operator: string;
                            prefix: boolean;
                            src: string;
                            subExpression: {
                              id: number;
                              name: string;
                              nodeType: string;
                              overloadedDeclarations: never[];
                              referencedDeclaration: number;
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          nodeType: string;
                          src: string;
                        };
                        nodeType: string;
                        src: string;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                      }
                  )[];
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: {
                  arguments: {
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  }[];
                  id: number;
                  kind: string;
                  modifierName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                }[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      baseType: {
                        id: number;
                        name: string;
                        nodeType: string;
                        src: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                      };
                      id: number;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: (
                    | {
                        condition: {
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          nodeType: string;
                          operator: string;
                          prefix: boolean;
                          src: string;
                          subExpression: {
                            components: {
                              commonType: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              lValueRequested: boolean;
                              leftExpression: {
                                expression: {
                                  arguments: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                  }[];
                                  expression: {
                                    argumentTypes: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    }[];
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                    typeName: {
                                      id: number;
                                      name: string;
                                      nodeType: string;
                                      src: string;
                                      typeDescriptions: {};
                                    };
                                  };
                                  id: number;
                                  isConstant: boolean;
                                  isLValue: boolean;
                                  isPure: boolean;
                                  kind: string;
                                  lValueRequested: boolean;
                                  names: never[];
                                  nodeType: string;
                                  src: string;
                                  tryCall: boolean;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              nodeType: string;
                              operator: string;
                              rightExpression: {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                value: string;
                              };
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            }[];
                            id: number;
                            isConstant: boolean;
                            isInlineArray: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            nodeType: string;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
                              arguments: never[];
                              expression: {
                                argumentTypes: never[];
                                id: number;
                                name: string;
                                nodeType: string;
                                overloadedDeclarations: never[];
                                referencedDeclaration: number;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              kind: string;
                              lValueRequested: boolean;
                              names: never[];
                              nodeType: string;
                              src: string;
                              tryCall: boolean;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            id: number;
                            nodeType: string;
                            src: string;
                          }[];
                        };
                        expression?: undefined;
                      }
                    | {
                        expression: {
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          leftHandSide: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          nodeType: string;
                          operator: string;
                          rightHandSide: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        trueBody?: undefined;
                      }
                  )[];
                };
                documentation: {
                  id: number;
                  nodeType: string;
                  src: string;
                  text: string;
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: {
                  arguments: {
                    id: number;
                    name: string;
                    nodeType: string;
                    overloadedDeclarations: never[];
                    referencedDeclaration: number;
                    src: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                  }[];
                  id: number;
                  kind: string;
                  modifierName: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  nodeType: string;
                  src: string;
                }[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      id: number;
                      name: string;
                      nodeType: string;
                      overloadedDeclarations: never[];
                      referencedDeclaration: number;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    functionReturnParameters: number;
                    id: number;
                    nodeType: string;
                    src: string;
                  }[];
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                nodeType: string;
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: never[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                documentation?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                baseFunctions: number[];
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: (
                    | {
                        expression: {
                          arguments: (
                            | {
                                baseExpression: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                indexExpression: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                hexValue?: undefined;
                                kind?: undefined;
                                value?: undefined;
                              }
                            | {
                                hexValue: string;
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                                value: string;
                                baseExpression?: undefined;
                                indexExpression?: undefined;
                              }
                          )[];
                          expression: {
                            argumentTypes: {
                              typeIdentifier: string;
                              typeString: string;
                            }[];
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: number[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          kind: string;
                          lValueRequested: boolean;
                          names: never[];
                          nodeType: string;
                          src: string;
                          tryCall: boolean;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          condition?: undefined;
                          falseExpression?: undefined;
                          trueExpression?: undefined;
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        functionReturnParameters?: undefined;
                      }
                    | {
                        expression: {
                          condition: {
                            commonType: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            lValueRequested: boolean;
                            leftExpression: {
                              expression: {
                                arguments: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                }[];
                                expression: {
                                  argumentTypes: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  }[];
                                  id: number;
                                  isConstant: boolean;
                                  isLValue: boolean;
                                  isPure: boolean;
                                  lValueRequested: boolean;
                                  nodeType: string;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                  typeName: {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {};
                                  };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                kind: string;
                                lValueRequested: boolean;
                                names: never[];
                                nodeType: string;
                                src: string;
                                tryCall: boolean;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              lValueRequested: boolean;
                              memberName: string;
                              nodeType: string;
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            };
                            nodeType: string;
                            operator: string;
                            rightExpression: {
                              hexValue: string;
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              kind: string;
                              lValueRequested: boolean;
                              nodeType: string;
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                              value: string;
                            };
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          falseExpression: {
                            id: number;
                            name: string;
                            nodeType: string;
                            overloadedDeclarations: never[];
                            referencedDeclaration: number;
                            src: string;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          id: number;
                          isConstant: boolean;
                          isLValue: boolean;
                          isPure: boolean;
                          lValueRequested: boolean;
                          nodeType: string;
                          src: string;
                          trueExpression: {
                            arguments: {
                              arguments: (
                                | {
                                    id: number;
                                    name: string;
                                    nodeType: string;
                                    overloadedDeclarations: never[];
                                    referencedDeclaration: number;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                    arguments?: undefined;
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    kind?: undefined;
                                    lValueRequested?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                    hexValue?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    arguments: never[];
                                    expression: {
                                      argumentTypes: never[];
                                      expression: {
                                        id: number;
                                        name: string;
                                        nodeType: string;
                                        overloadedDeclarations: never[];
                                        referencedDeclaration: number;
                                        src: string;
                                        typeDescriptions: {
                                          typeIdentifier: string;
                                          typeString: string;
                                        };
                                      };
                                      id: number;
                                      isConstant: boolean;
                                      isLValue: boolean;
                                      isPure: boolean;
                                      lValueRequested: boolean;
                                      memberName: string;
                                      nodeType: string;
                                      referencedDeclaration: number;
                                      src: string;
                                      typeDescriptions: {
                                        typeIdentifier: string;
                                        typeString: string;
                                      };
                                    };
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    names: never[];
                                    nodeType: string;
                                    src: string;
                                    tryCall: boolean;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                    hexValue?: undefined;
                                    value?: undefined;
                                  }
                                | {
                                    hexValue: string;
                                    id: number;
                                    isConstant: boolean;
                                    isLValue: boolean;
                                    isPure: boolean;
                                    kind: string;
                                    lValueRequested: boolean;
                                    nodeType: string;
                                    src: string;
                                    typeDescriptions: {
                                      typeIdentifier: string;
                                      typeString: string;
                                    };
                                    value: string;
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
                                    referencedDeclaration?: undefined;
                                    arguments?: undefined;
                                    expression?: undefined;
                                    names?: undefined;
                                    tryCall?: undefined;
                                  }
                              )[];
                              expression: {
                                argumentTypes: {
                                  typeIdentifier: string;
                                  typeString: string;
                                }[];
                                expression: {
                                  id: number;
                                  name: string;
                                  nodeType: string;
                                  overloadedDeclarations: never[];
                                  referencedDeclaration: number;
                                  src: string;
                                  typeDescriptions: {
                                    typeIdentifier: string;
                                    typeString: string;
                                  };
                                };
                                id: number;
                                isConstant: boolean;
                                isLValue: boolean;
                                isPure: boolean;
                                lValueRequested: boolean;
                                memberName: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {
                                  typeIdentifier: string;
                                  typeString: string;
                                };
                              };
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              kind: string;
                              lValueRequested: boolean;
                              names: never[];
                              nodeType: string;
                              src: string;
                              tryCall: boolean;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                            }[];
                            expression: {
                              argumentTypes: {
                                typeIdentifier: string;
                                typeString: string;
                              }[];
                              id: number;
                              isConstant: boolean;
                              isLValue: boolean;
                              isPure: boolean;
                              lValueRequested: boolean;
                              nodeType: string;
                              src: string;
                              typeDescriptions: {
                                typeIdentifier: string;
                                typeString: string;
                              };
                              typeName: {
                                id: number;
                                name: string;
                                nodeType: string;
                                src: string;
                                typeDescriptions: {};
                              };
                            };
                            id: number;
                            isConstant: boolean;
                            isLValue: boolean;
                            isPure: boolean;
                            kind: string;
                            lValueRequested: boolean;
                            names: never[];
                            nodeType: string;
                            src: string;
                            tryCall: boolean;
                            typeDescriptions: {
                              typeIdentifier: string;
                              typeString: string;
                            };
                          };
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                          arguments?: undefined;
                          expression?: undefined;
                          kind?: undefined;
                          names?: undefined;
                          tryCall?: undefined;
                        };
                        functionReturnParameters: number;
                        id: number;
                        nodeType: string;
                        src: string;
                      }
                  )[];
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                nodeType: string;
                overrides: {
                  id: number;
                  nodeType: string;
                  overrides: never[];
                  src: string;
                };
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                documentation?: undefined;
              }
            | {
                baseFunctions: number[];
                body: {
                  id: number;
                  nodeType: string;
                  src: string;
                  statements: {
                    expression: {
                      arguments: {
                        id: number;
                        name: string;
                        nodeType: string;
                        overloadedDeclarations: never[];
                        referencedDeclaration: number;
                        src: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                      }[];
                      expression: {
                        argumentTypes: {
                          typeIdentifier: string;
                          typeString: string;
                        }[];
                        expression: {
                          id: number;
                          name: string;
                          nodeType: string;
                          overloadedDeclarations: never[];
                          referencedDeclaration: number;
                          src: string;
                          typeDescriptions: {
                            typeIdentifier: string;
                            typeString: string;
                          };
                        };
                        id: number;
                        isConstant: boolean;
                        isLValue: boolean;
                        isPure: boolean;
                        lValueRequested: boolean;
                        memberName: string;
                        nodeType: string;
                        referencedDeclaration: number;
                        src: string;
                        typeDescriptions: {
                          typeIdentifier: string;
                          typeString: string;
                        };
                      };
                      id: number;
                      isConstant: boolean;
                      isLValue: boolean;
                      isPure: boolean;
                      kind: string;
                      lValueRequested: boolean;
                      names: never[];
                      nodeType: string;
                      src: string;
                      tryCall: boolean;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    functionReturnParameters: number;
                    id: number;
                    nodeType: string;
                    src: string;
                  }[];
                };
                functionSelector: string;
                id: number;
                implemented: boolean;
                kind: string;
                modifiers: never[];
                name: string;
                nameLocation: string;
                nodeType: string;
                overrides: {
                  id: number;
                  nodeType: string;
                  overrides: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  }[];
                  src: string;
                };
                parameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                returnParameters: {
                  id: number;
                  nodeType: string;
                  parameters: {
                    constant: boolean;
                    id: number;
                    mutability: string;
                    name: string;
                    nameLocation: string;
                    nodeType: string;
                    scope: number;
                    src: string;
                    stateVariable: boolean;
                    storageLocation: string;
                    typeDescriptions: {
                      typeIdentifier: string;
                      typeString: string;
                    };
                    typeName: {
                      id: number;
                      name: string;
                      nodeType: string;
                      src: string;
                      typeDescriptions: {
                        typeIdentifier: string;
                        typeString: string;
                      };
                    };
                    visibility: string;
                  }[];
                  src: string;
                };
                scope: number;
                src: string;
                stateMutability: string;
                virtual: boolean;
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                typeName?: undefined;
                constant?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                value?: undefined;
                documentation?: undefined;
              }
          )[];
          scope: number;
          src: string;
          usedErrors: number[];
          literals?: undefined;
          absolutePath?: undefined;
          file?: undefined;
          sourceUnit?: undefined;
          symbolAliases?: undefined;
          unitAlias?: undefined;
          documentation?: undefined;
          errorSelector?: undefined;
          parameters?: undefined;
        }
    )[];
    src: string;
  };
  compiler: {
    name: string;
    version: string;
  };
  networks: {};
  schemaVersion: string;
  updatedAt: string;
  devdoc: {
    kind: string;
    methods: {
      'balanceOf(address,uint256)': {
        details: string;
      };
      'balanceOfBatch(address[],uint256[])': {
        details: string;
      };
      'getRoleAdmin(bytes32)': {
        details: string;
      };
      'grantRole(bytes32,address)': {
        details: string;
      };
      'hasRole(bytes32,address)': {
        details: string;
      };
      'isApprovedForAll(address,address)': {
        details: string;
      };
      'owner()': {
        details: string;
      };
      'renounceOwnership()': {
        details: string;
      };
      'renounceRole(bytes32,address)': {
        details: string;
      };
      'revokeRole(bytes32,address)': {
        details: string;
      };
      'royaltyInfo(uint256,uint256)': {
        details: string;
      };
      'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': {
        details: string;
      };
      'safeTransferFrom(address,address,uint256,uint256,bytes)': {
        details: string;
      };
      'setApprovalForAll(address,bool)': {
        details: string;
      };
      'transferOwnership(address)': {
        details: string;
      };
    };
    version: number;
  };
  userdoc: {
    errors: {
      'BaseURIIsEmpty()': {
        notice: string;
      }[];
      'ContractURIIsEmpty()': {
        notice: string;
      }[];
    };
    kind: string;
    methods: {
      'mint(address,uint256,uint256)': {
        notice: string;
      };
      'mintBatch(address,uint256[],uint256[])': {
        notice: string;
      };
      'setContractURI(string)': {
        notice: string;
      };
      'setRoyalties(address,uint96)': {
        notice: string;
      };
      'setURI(string)': {
        notice: string;
      };
    };
    version: number;
  };
  db: {
    callBytecode: {
      id: string;
    };
    createBytecode: {
      id: string;
    };
    contract: {
      id: string;
    };
  };
};
export default _default;
//# sourceMappingURL=ERC1155Mintable.d.ts.map
