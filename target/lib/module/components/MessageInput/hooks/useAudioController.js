var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAudioController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactNative = require("react-native");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _native = require("../../../native");
var _audioSampling = require("../utils/audioSampling");
var _normalizeAudioLevel = require("../utils/normalizeAudioLevel");
var useAudioController = function useAudioController() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    micLocked = _useState2[0],
    setMicLocked = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    permissionsGranted = _useState4[0],
    setPermissionsGranted = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    paused = _useState6[0],
    setPaused = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    position = _useState8[0],
    setPosition = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    progress = _useState10[0],
    setProgress = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    waveformData = _useState12[0],
    setWaveformData = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isScheduledForSubmit = _useState14[0],
    setIsScheduleForSubmit = _useState14[1];
  var _useState15 = (0, _react.useState)(undefined),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    recording = _useState16[0],
    setRecording = _useState16[1];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    recordingDuration = _useState18[0],
    setRecordingDuration = _useState18[1];
  var _useState19 = (0, _react.useState)('idle'),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    recordingStatus = _useState20[0],
    setRecordingStatus = _useState20[1];
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    sendMessage = _useMessageInputConte.sendMessage,
    uploadNewFile = _useMessageInputConte.uploadNewFile;
  var soundRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return function () {
      stopVoicePlayer();
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isScheduledForSubmit) {
      sendMessage();
      setIsScheduleForSubmit(false);
    }
  }, [isScheduledForSubmit, sendMessage]);
  var onVoicePlayerProgressHandler = function onVoicePlayerProgressHandler(currentPosition, playbackDuration) {
    var currentProgress = currentPosition / playbackDuration;
    if (currentProgress === 1) {
      setPaused(true);
      setProgress(0);
    } else {
      setProgress(currentProgress);
    }
  };
  var onVoicePlayerPlaybackStatusUpdate = function onVoicePlayerPlaybackStatusUpdate(status) {
    if (status.shouldPlay === undefined || status.shouldPlay === true) {
      setPosition((status == null ? void 0 : status.currentPosition) || (status == null ? void 0 : status.positionMillis));
      setRecordingDuration(status.duration || status.durationMillis);
      if (status.didJustFinish) {
        onVoicePlayerProgressHandler(status.durationMillis, status.durationMillis);
      } else {
        if (status.currentPosition && status.duration) onVoicePlayerProgressHandler(status.currentPosition, status.duration);else if (status.positionMillis && status.durationMillis) onVoicePlayerProgressHandler(status.positionMillis, status.durationMillis);
      }
    }
  };
  var onVoicePlayerPlayPause = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _soundRef$current, _soundRef$current2;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!paused) {
              _context.next = 14;
              break;
            }
            if (!(progress === 0)) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return startVoicePlayer();
          case 4:
            _context.next = 12;
            break;
          case 6:
            if (!_native.Audio.resumePlayer) {
              _context.next = 9;
              break;
            }
            _context.next = 9;
            return _native.Audio.resumePlayer();
          case 9:
            if (!((_soundRef$current = soundRef.current) != null && _soundRef$current.playAsync)) {
              _context.next = 12;
              break;
            }
            _context.next = 12;
            return soundRef.current.playAsync();
          case 12:
            _context.next = 20;
            break;
          case 14:
            if (!_native.Audio.pausePlayer) {
              _context.next = 17;
              break;
            }
            _context.next = 17;
            return _native.Audio.pausePlayer();
          case 17:
            if (!((_soundRef$current2 = soundRef.current) != null && _soundRef$current2.pauseAsync)) {
              _context.next = 20;
              break;
            }
            _context.next = 20;
            return soundRef.current.pauseAsync();
          case 20:
            setPaused(!paused);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onVoicePlayerPlayPause() {
      return _ref.apply(this, arguments);
    };
  }();
  var startVoicePlayer = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var uri, _soundRef$current3;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (recording) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (!_native.Audio.startPlayer) {
              _context2.next = 5;
              break;
            }
            _context2.next = 5;
            return _native.Audio.startPlayer(recording, {}, onVoicePlayerPlaybackStatusUpdate);
          case 5:
            if (!(recording && typeof recording !== 'string')) {
              _context2.next = 16;
              break;
            }
            uri = recording.getURI();
            if (!uri) {
              _context2.next = 16;
              break;
            }
            _context2.next = 10;
            return _native.Sound.initializeSound({
              uri: uri
            }, {}, onVoicePlayerPlaybackStatusUpdate);
          case 10:
            soundRef.current = _context2.sent;
            if (!((_soundRef$current3 = soundRef.current) != null && _soundRef$current3.playAsync && soundRef.current.setProgressUpdateIntervalAsync)) {
              _context2.next = 16;
              break;
            }
            _context2.next = 14;
            return soundRef.current.playAsync();
          case 14:
            _context2.next = 16;
            return soundRef.current.setProgressUpdateIntervalAsync(_reactNative.Platform.OS === 'android' ? 100 : 60);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function startVoicePlayer() {
      return _ref2.apply(this, arguments);
    };
  }();
  var stopVoicePlayer = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var _soundRef$current4, _soundRef$current5, _soundRef$current6;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!_native.Audio.stopPlayer) {
              _context3.next = 3;
              break;
            }
            _context3.next = 3;
            return _native.Audio.stopPlayer();
          case 3:
            if (!(recording && typeof recording !== 'string')) {
              _context3.next = 9;
              break;
            }
            if (!((_soundRef$current4 = soundRef.current) != null && _soundRef$current4.stopAsync && (_soundRef$current5 = soundRef.current) != null && _soundRef$current5.unloadAsync)) {
              _context3.next = 9;
              break;
            }
            _context3.next = 7;
            return soundRef.current.stopAsync();
          case 7:
            _context3.next = 9;
            return (_soundRef$current6 = soundRef.current) == null ? void 0 : _soundRef$current6.unloadAsync();
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function stopVoicePlayer() {
      return _ref3.apply(this, arguments);
    };
  }();
  var onRecordingStatusUpdate = function onRecordingStatusUpdate(status) {
    if (status.isDoneRecording === true) {
      return;
    }
    setRecordingDuration((status == null ? void 0 : status.currentPosition) || status.durationMillis);
    var lowerBound = _reactNative.Platform.OS === 'ios' || status.currentMetering ? -60 : -120;
    var normalizedAudioLevel = (0, _normalizeAudioLevel.normalizeAudioLevel)(status.currentMetering || status.metering, lowerBound);
    setWaveformData(function (prev) {
      return [].concat((0, _toConsumableArray2["default"])(prev), [normalizedAudioLevel]);
    });
  };
  var startVoiceRecording = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var recordingInfo, accessGranted, _recording;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setRecordingStatus('recording');
            _context4.next = 3;
            return _native.Audio.startRecording({
              isMeteringEnabled: true
            }, onRecordingStatusUpdate);
          case 3:
            recordingInfo = _context4.sent;
            accessGranted = recordingInfo.accessGranted;
            if (!accessGranted) {
              _context4.next = 14;
              break;
            }
            setPermissionsGranted(true);
            _recording = recordingInfo.recording;
            if (_recording && typeof _recording !== 'string') {
              _recording.setProgressUpdateInterval(_reactNative.Platform.OS === 'android' ? 100 : 60);
            }
            setRecording(_recording);
            _context4.next = 12;
            return stopVoicePlayer();
          case 12:
            _context4.next = 17;
            break;
          case 14:
            setPermissionsGranted(false);
            resetState();
            _reactNative.Alert.alert('Please allow Audio permissions in settings.');
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function startVoiceRecording() {
      return _ref4.apply(this, arguments);
    };
  }();
  var stopVoiceRecording = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!recording) {
              _context5.next = 10;
              break;
            }
            if (!(typeof recording !== 'string')) {
              _context5.next = 8;
              break;
            }
            _context5.next = 4;
            return recording.stopAndUnloadAsync();
          case 4:
            _context5.next = 6;
            return _native.Audio.stopRecording();
          case 6:
            _context5.next = 10;
            break;
          case 8:
            _context5.next = 10;
            return _native.Audio.stopRecording();
          case 10:
            setRecordingStatus('stopped');
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function stopVoiceRecording() {
      return _ref5.apply(this, arguments);
    };
  }();
  var resetState = function resetState() {
    setRecording(undefined);
    setRecordingStatus('idle');
    setMicLocked(false);
    setWaveformData([]);
    setPaused(true);
    setPosition(0);
    setProgress(0);
  };
  var deleteVoiceRecording = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(recordingStatus === 'recording')) {
              _context6.next = 3;
              break;
            }
            _context6.next = 3;
            return stopVoiceRecording();
          case 3:
            if (paused) {
              _context6.next = 6;
              break;
            }
            _context6.next = 6;
            return stopVoicePlayer();
          case 6:
            resetState();
            (0, _native.triggerHaptic)('impactMedium');
          case 8:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function deleteVoiceRecording() {
      return _ref6.apply(this, arguments);
    };
  }();
  var uploadVoiceRecording = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(multiSendEnabled) {
      var durationInSeconds, resampledWaveformData, file;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (paused) {
              _context7.next = 3;
              break;
            }
            _context7.next = 3;
            return stopVoicePlayer();
          case 3:
            if (!(recordingStatus === 'recording')) {
              _context7.next = 6;
              break;
            }
            _context7.next = 6;
            return stopVoiceRecording();
          case 6:
            durationInSeconds = parseFloat((recordingDuration / 1000).toFixed(3));
            resampledWaveformData = (0, _audioSampling.resampleWaveformData)(waveformData, 100);
            file = {
              duration: durationInSeconds,
              mimeType: 'audio/aac',
              name: "audio_recording_".concat(new Date().toISOString(), ".aac"),
              type: 'voiceRecording',
              uri: typeof recording !== 'string' ? recording == null ? void 0 : recording.getURI() : recording,
              waveform_data: resampledWaveformData
            };
            if (!multiSendEnabled) {
              _context7.next = 14;
              break;
            }
            _context7.next = 12;
            return uploadNewFile(file);
          case 12:
            _context7.next = 17;
            break;
          case 14:
            _context7.next = 16;
            return uploadNewFile(file);
          case 16:
            setIsScheduleForSubmit(true);
          case 17:
            resetState();
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function uploadVoiceRecording(_x) {
      return _ref7.apply(this, arguments);
    };
  }();
  return {
    deleteVoiceRecording: deleteVoiceRecording,
    micLocked: micLocked,
    onVoicePlayerPlayPause: onVoicePlayerPlayPause,
    paused: paused,
    permissionsGranted: permissionsGranted,
    position: position,
    progress: progress,
    recording: recording,
    recordingDuration: recordingDuration,
    recordingStatus: recordingStatus,
    setMicLocked: setMicLocked,
    setRecording: setRecording,
    setRecordingDuration: setRecordingDuration,
    setRecordingStatus: setRecordingStatus,
    setWaveformData: setWaveformData,
    startVoiceRecording: startVoiceRecording,
    stopVoiceRecording: stopVoiceRecording,
    uploadVoiceRecording: uploadVoiceRecording,
    waveformData: waveformData
  };
};
exports.useAudioController = useAudioController;
//# sourceMappingURL=useAudioController.js.map