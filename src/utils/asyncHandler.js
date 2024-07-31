const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    return Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      console.log(error)
    );
  };
};

export default asyncHandler;
