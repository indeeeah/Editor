export default function Size({
  variableStyle,
  handleVariableStyle,
}: {
  variableStyle: any;
  handleVariableStyle: (variableStyle: any) => void;
}) {
  return (
    <>
      <div className="flex justify-center pb-2">
        <div className="flex items-center rounded-md bg-gray-secondary p-1">
          <input
            id="margin-top"
            type="text"
            className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
            value={variableStyle.marginTop}
            onChange={event =>
              handleVariableStyle({
                ...variableStyle,
                marginTop: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center pr-2">
          <div className="flex items-center rounded-md bg-gray-secondary p-1">
            <input
              id="margin-left"
              type="text"
              className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
              value={variableStyle.marginLeft}
              onChange={event =>
                handleVariableStyle({
                  ...variableStyle,
                  marginLeft: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="h-28 w-48 rounded-md border border-gray-300 bg-gray-50">
          <div className="flex h-full items-center justify-center">
            <div>
              <div className="flex justify-center pb-2">
                <div className="flex items-center rounded-md bg-gray-secondary p-1">
                  <input
                    id="padding-top"
                    type="text"
                    className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                    value={variableStyle.paddingTop}
                    onChange={event =>
                      handleVariableStyle({
                        ...variableStyle,
                        paddingTop: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex justify-center px-1">
                  <div className="flex items-center rounded-md bg-gray-secondary p-1">
                    <input
                      id="padding-left"
                      type="text"
                      className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                      value={variableStyle.paddingLeft}
                      onChange={event =>
                        handleVariableStyle({
                          ...variableStyle,
                          paddingLeft: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex h-8 items-center">
                  <div className="flex justify-center">
                    <div className="flex items-center rounded-md bg-gray-secondary p-1">
                      <input
                        id="width"
                        type="text"
                        className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                        value={variableStyle.width}
                        onChange={event =>
                          handleVariableStyle({
                            ...variableStyle,
                            width: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">x</span>
                  <div className="flex justify-center">
                    <div className="flex items-center rounded-md bg-gray-secondary p-1">
                      <input
                        id="height"
                        type="text"
                        className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                        value={variableStyle.height}
                        onChange={event =>
                          handleVariableStyle({
                            ...variableStyle,
                            height: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center px-1">
                  <div className="flex items-center rounded-md bg-gray-secondary p-1">
                    <input
                      id="padding-right"
                      type="text"
                      className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                      value={variableStyle.paddingRight}
                      onChange={event =>
                        handleVariableStyle({
                          ...variableStyle,
                          paddingRight: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-2">
                <div className="flex items-center rounded-md bg-gray-secondary p-1">
                  <input
                    id="padding-bottom"
                    type="text"
                    className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
                    value={variableStyle.paddingBottom}
                    onChange={event =>
                      handleVariableStyle({
                        ...variableStyle,
                        paddingBottom: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pl-2">
          <div className="flex items-center rounded-md bg-gray-secondary p-1">
            <input
              id="margin-right"
              type="text"
              className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
              value={variableStyle.marginRight}
              onChange={event =>
                handleVariableStyle({
                  ...variableStyle,
                  marginRight: event.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className="flex items-center rounded-md bg-gray-secondary p-1">
          <input
            id="margin-bottom"
            type="text"
            className="w-8 border-none border-gray-primary bg-gray-secondary text-center text-xs outline-none"
            value={variableStyle.marginBottom}
            onChange={event =>
              handleVariableStyle({
                ...variableStyle,
                marginBottom: event.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
}
