export default {
  backend: 'webgl',
  console: true,
  face: {
    enabled: true, // refers to detector, but since all other face modules rely on detector, it should be a global
    detector: {
      modelPath: '../models/blazeface/tfhub/model.json', // can be blazeface-front or blazeface-back
      anchorSize: 128, // fixed regardless of model
      inputSize: 128, // fixed value: 128 for front and tfhub and 256 for back
      maxFaces: 10, // maximum number of faces detected in the input, should be set to the minimum number for performance
      skipFrames: 10, // how many frames to go without running the bounding box detector
      minConfidence: 0.5, // threshold for discarding a prediction
      iouThreshold: 0.3, // threshold for deciding whether boxes overlap too much in non-maximum suppression
      scoreThreshold: 0.7, // threshold for deciding when to remove boxes based on score in non-maximum suppression
    },
    mesh: {
      enabled: true,
      modelPath: '../models/facemesh/model.json',
      inputSize: 192, // fixed value
    },
    iris: {
      enabled: true,
      modelPath: '../models/iris/model.json',
      enlargeFactor: 2.3, // empiric tuning
      inputSize: 64, // fixed value
    },
    age: {
      enabled: true,
      modelPath: '../models/ssrnet-age/imdb/model.json',
      inputSize: 64, // fixed value
      skipFrames: 10,
    },
    gender: {
      enabled: true,
      modelPath: '../models/ssrnet-gender/imdb/model.json',
    },
    emotion: {
      enabled: true,
      inputSize: 64, // fixed value
      minConfidence: 0.5,
      skipFrames: 10,
      useGrayscale: true,
      modelPath: '../models/emotion/model.json',
    },
  },
  body: {
    enabled: true,
    modelPath: '../models/posenet/model.json',
    inputResolution: 257, // fixed value
    outputStride: 16, // fixed value
    maxDetections: 5,
    scoreThreshold: 0.7,
    nmsRadius: 20,
  },
  hand: {
    enabled: true,
    inputSize: 256, // fixed value
    skipFrames: 10,
    minConfidence: 0.5,
    iouThreshold: 0.3,
    scoreThreshold: 0.7,
    enlargeFactor: 1.65, // empiric tuning
    maxHands: 2,
    detector: {
      anchors: '../models/handdetect/anchors.json',
      modelPath: '../models/handdetect/model.json',
    },
    skeleton: {
      modelPath: '../models/handskeleton/model.json',
    },
  },
};
