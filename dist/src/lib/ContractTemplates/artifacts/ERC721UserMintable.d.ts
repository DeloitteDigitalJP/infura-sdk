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
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
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
  immutableReferences: {
    2486: {
      length: number;
      start: number;
    }[];
  };
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
                nodeType: string;
                src: string;
                value: {
                  name: string;
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
              statements: {
                nodeType: string;
                src: string;
                value: {
                  arguments: {
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
      Counters: number[];
      ERC165: number[];
      ERC2981: number[];
      ERC721: number[];
      ERC721UserMintable: number[];
      IAccessControl: number[];
      IERC165: number[];
      IERC2981: number[];
      IERC721: number[];
      IERC721Metadata: number[];
      IERC721Receiver: number[];
      InsufficientFunds: number[];
      InvalidMaxSupply: number[];
      MaxSupplyExceeded: number[];
      MaxTokenRequestExceeded: number[];
      NameIsEmpty: number[];
      Ownable: number[];
      ReentrancyGuard: number[];
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
                  stateMutability: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  pathNode?: undefined;
                  referencedDeclaration?: undefined;
                };
                constant?: undefined;
                documentation?: undefined;
                mutability?: undefined;
                name?: undefined;
                nameLocation?: undefined;
                scope?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                visibility?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                functionSelector?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
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
                  nodeType: string;
                  pathNode: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  referencedDeclaration: number;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  name?: undefined;
                  stateMutability?: undefined;
                };
                constant?: undefined;
                documentation?: undefined;
                mutability?: undefined;
                name?: undefined;
                nameLocation?: undefined;
                scope?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                visibility?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                functionSelector?: undefined;
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                constant: boolean;
                documentation: {
                  id: number;
                  nodeType: string;
                  src: string;
                  text: string;
                };
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
                  nodeType: string;
                  pathNode: {
                    id: number;
                    name: string;
                    nodeType: string;
                    referencedDeclaration: number;
                    src: string;
                  };
                  referencedDeclaration: number;
                  src: string;
                  typeDescriptions: {
                    typeIdentifier: string;
                    typeString: string;
                  };
                  name?: undefined;
                  stateMutability?: undefined;
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
                functionSelector?: undefined;
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
                  stateMutability?: undefined;
                  pathNode?: undefined;
                  referencedDeclaration?: undefined;
                };
                visibility: string;
                global?: undefined;
                libraryName?: undefined;
                documentation?: undefined;
                body?: undefined;
                implemented?: undefined;
                kind?: undefined;
                modifiers?: undefined;
                parameters?: undefined;
                returnParameters?: undefined;
                stateMutability?: undefined;
                virtual?: undefined;
                functionSelector?: undefined;
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
                          commonType?: undefined;
                          leftExpression?: undefined;
                          rightExpression?: undefined;
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
                          prefix?: undefined;
                          subExpression?: undefined;
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
                              names: string[];
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
                documentation?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                functionSelector?: undefined;
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
                            commonType?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            lValueRequested?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
                          };
                          nodeType: string;
                          operator: string;
                          rightExpression: {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
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
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
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
                                  }
                                | {
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
                              names: string[];
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
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
                    | {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
                          };
                          nodeType: string;
                          operator: string;
                          rightExpression: {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
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
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
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
                                  }
                                | {
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
                              names: string[];
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
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
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
                                };
                                nodeType: string;
                                src: string;
                                expression?: undefined;
                              }
                            | {
                                expression: {
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
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
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
                                assignments?: undefined;
                                declarations?: undefined;
                                initialValue?: undefined;
                              }
                            | {
                                expression: {
                                  arguments: (
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
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    lValueRequested?: undefined;
                                    memberName?: undefined;
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
                                assignments?: undefined;
                                declarations?: undefined;
                                initialValue?: undefined;
                              }
                          )[];
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
                            commonType?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            lValueRequested?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
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
                            arguments?: undefined;
                            expression?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
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
                modifiers: (
                  | {
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
                    }
                  | {
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
                      arguments?: undefined;
                    }
                )[];
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
                        };
                        id: number;
                        nodeType: string;
                        src: string;
                        condition?: undefined;
                        trueBody?: undefined;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
                    | {
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
                            commonType?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            lValueRequested?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
                            expression?: undefined;
                            memberName?: undefined;
                          };
                          nodeType: string;
                          operator: string;
                          rightExpression: {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
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
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
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
                                  }
                                | {
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
                              names: string[];
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
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
                    | {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
                            expression?: undefined;
                            memberName?: undefined;
                          };
                          nodeType: string;
                          operator: string;
                          rightExpression: {
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
                            name?: undefined;
                            overloadedDeclarations?: undefined;
                            referencedDeclaration?: undefined;
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
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
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
                                  }
                                | {
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
                              names: string[];
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
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
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
                        nodeType: string;
                        src: string;
                        expression?: undefined;
                        condition?: undefined;
                        trueBody?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
                      }
                    | {
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
                            commonType?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
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
                            arguments?: undefined;
                            expression?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
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
                        trueBody: {
                          id: number;
                          nodeType: string;
                          src: string;
                          statements: {
                            errorCall: {
                              arguments: (
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
                                    commonType?: undefined;
                                    leftExpression?: undefined;
                                    operator?: undefined;
                                    rightExpression?: undefined;
                                  }
                                | {
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
                                    expression?: undefined;
                                    memberName?: undefined;
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
                              names: string[];
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
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
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
                                };
                                nodeType: string;
                                src: string;
                                expression?: undefined;
                              }
                            | {
                                expression: {
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
                                    name?: undefined;
                                    overloadedDeclarations?: undefined;
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
                                assignments?: undefined;
                                declarations?: undefined;
                                initialValue?: undefined;
                              }
                            | {
                                expression: {
                                  arguments: (
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
                                    expression?: undefined;
                                    isConstant?: undefined;
                                    isLValue?: undefined;
                                    isPure?: undefined;
                                    lValueRequested?: undefined;
                                    memberName?: undefined;
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
                                assignments?: undefined;
                                declarations?: undefined;
                                initialValue?: undefined;
                              }
                          )[];
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
                            commonType?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            lValueRequested?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
                            expression?: undefined;
                            memberName?: undefined;
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
                            arguments?: undefined;
                            expression?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
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
                        expression?: undefined;
                        trueBody?: undefined;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                      }
                    | {
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
                            commonType?: undefined;
                            leftExpression?: undefined;
                            operator?: undefined;
                            rightExpression?: undefined;
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
                            arguments?: undefined;
                            expression?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            names?: undefined;
                            tryCall?: undefined;
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
                        trueBody: {
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
                                nodeType: string;
                                src: string;
                                expression?: undefined;
                              }
                            | {
                                expression: {
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
                                    expression: {
                                      argumentTypes: {
                                        typeIdentifier: string;
                                        typeString: string;
                                      }[];
                                      expression: {
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
                                    lValueRequested: boolean;
                                    names: string[];
                                    nodeType: string;
                                    options: {
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
                                assignments?: undefined;
                                declarations?: undefined;
                                initialValue?: undefined;
                              }
                          )[];
                        };
                        expression?: undefined;
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
                        body?: undefined;
                        initializationExpression?: undefined;
                        loopExpression?: undefined;
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
                documentation?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
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
                        expression: {
                          arguments: (
                            | {
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
                                operator?: undefined;
                                prefix?: undefined;
                                subExpression?: undefined;
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
                            hexValue?: undefined;
                            isConstant?: undefined;
                            isLValue?: undefined;
                            isPure?: undefined;
                            kind?: undefined;
                            lValueRequested?: undefined;
                            value?: undefined;
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
                  parameters: never[];
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
                documentation?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
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
                        src: string;
                        expression?: undefined;
                      }
                    | {
                        expression: {
                          arguments: (
                            | {
                                arguments: {
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
                                    stateMutability: string;
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
                                name?: undefined;
                                overloadedDeclarations?: undefined;
                                referencedDeclaration?: undefined;
                              }
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
                        assignments?: undefined;
                        declarations?: undefined;
                        initialValue?: undefined;
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
                  parameters: never[];
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
                baseFunctions?: undefined;
                overrides?: undefined;
              }
            | {
                baseFunctions: number[];
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
                documentation?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
                functionSelector?: undefined;
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
                documentation?: undefined;
                mutability?: undefined;
                stateVariable?: undefined;
                storageLocation?: undefined;
                typeDescriptions?: undefined;
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
    errors: {
      'InsufficientFunds(uint256,uint256)': {
        params: {
          required: string;
          sent: string;
        };
      }[];
      'InvalidMaxSupply(uint256,uint8)': {
        params: {
          maxSupply: string;
          maxTokenRequest: string;
        };
      }[];
      'MaxSupplyExceeded(uint256,uint256)': {
        params: {
          maxSupply: string;
          quantity: string;
        };
      }[];
      'MaxTokenRequestExceeded(uint256,uint256)': {
        params: {
          maxTokenPurchase: string;
          quantity: string;
        };
      }[];
    };
    kind: string;
    methods: {
      'approve(address,uint256)': {
        details: string;
      };
      'balanceOf(address)': {
        details: string;
      };
      'getApproved(uint256)': {
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
      'name()': {
        details: string;
      };
      'owner()': {
        details: string;
      };
      'ownerOf(uint256)': {
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
      'safeTransferFrom(address,address,uint256)': {
        details: string;
      };
      'safeTransferFrom(address,address,uint256,bytes)': {
        details: string;
      };
      'setApprovalForAll(address,bool)': {
        details: string;
      };
      'symbol()': {
        details: string;
      };
      'tokenURI(uint256)': {
        details: string;
      };
      'transferFrom(address,address,uint256)': {
        details: string;
      };
      'transferOwnership(address)': {
        details: string;
      };
    };
    stateVariables: {
      _tokenIdCounter: {
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
      'InsufficientFunds(uint256,uint256)': {
        notice: string;
      }[];
      'InvalidMaxSupply(uint256,uint8)': {
        notice: string;
      }[];
      'MaxSupplyExceeded(uint256,uint256)': {
        notice: string;
      }[];
      'MaxTokenRequestExceeded(uint256,uint256)': {
        notice: string;
      }[];
      'NameIsEmpty()': {
        notice: string;
      }[];
    };
    kind: string;
    methods: {
      'mint(uint256)': {
        notice: string;
      };
      'reserve(uint256)': {
        notice: string;
      };
      'reveal(string)': {
        notice: string;
      };
      'setBaseURI(string)': {
        notice: string;
      };
      'setContractURI(string)': {
        notice: string;
      };
      'setMaxTokenRequest(uint8)': {
        notice: string;
      };
      'setPrice(uint256)': {
        notice: string;
      };
      'setRoyalties(address,uint96)': {
        notice: string;
      };
      'toggleSale()': {
        notice: string;
      };
      'withdraw()': {
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
//# sourceMappingURL=ERC721UserMintable.d.ts.map