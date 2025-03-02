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
var _types = require("../../../types/types");
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
      stopSDKVoiceRecording();
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
            if (_native.Audio) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            if (!paused) {
              _context.next = 16;
              break;
            }
            if (!(progress === 0)) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return startVoicePlayer();
          case 6:
            _context.next = 14;
            break;
          case 8:
            if (!_native.Audio.resumePlayer) {
              _context.next = 11;
              break;
            }
            _context.next = 11;
            return _native.Audio.resumePlayer();
          case 11:
            if (!((_soundRef$current = soundRef.current) != null && _soundRef$current.playAsync)) {
              _context.next = 14;
              break;
            }
            _context.next = 14;
            return soundRef.current.playAsync();
          case 14:
            _context.next = 22;
            break;
          case 16:
            if (!_native.Audio.pausePlayer) {
              _context.next = 19;
              break;
            }
            _context.next = 19;
            return _native.Audio.pausePlayer();
          case 19:
            if (!((_soundRef$current2 = soundRef.current) != null && _soundRef$current2.pauseAsync)) {
              _context.next = 22;
              break;
            }
            _context.next = 22;
            return soundRef.current.pauseAsync();
          case 22:
            setPaused(!paused);
          case 23:
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
            if (_native.Audio) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (recording) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            if (!_native.Audio.startPlayer) {
              _context2.next = 7;
              break;
            }
            _context2.next = 7;
            return _native.Audio.startPlayer(recording, {}, onVoicePlayerPlaybackStatusUpdate);
          case 7:
            if (!(recording && typeof recording !== 'string')) {
              _context2.next = 18;
              break;
            }
            uri = recording.getURI();
            if (!uri) {
              _context2.next = 18;
              break;
            }
            _context2.next = 12;
            return _native.Sound.initializeSound({
              uri: uri
            }, {}, onVoicePlayerPlaybackStatusUpdate);
          case 12:
            soundRef.current = _context2.sent;
            if (!((_soundRef$current3 = soundRef.current) != null && _soundRef$current3.playAsync && soundRef.current.setProgressUpdateIntervalAsync)) {
              _context2.next = 18;
              break;
            }
            _context2.next = 16;
            return soundRef.current.playAsync();
          case 16:
            _context2.next = 18;
            return soundRef.current.setProgressUpdateIntervalAsync(_reactNative.Platform.OS === 'android' ? 100 : 60);
          case 18:
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
      var _soundRef$current4, _soundRef$current5;
      var _soundRef$current6;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (_native.Audio) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            if (!_native.Audio.stopPlayer) {
              _context3.next = 5;
              break;
            }
            _context3.next = 5;
            return _native.Audio.stopPlayer();
          case 5:
            if (!((_soundRef$current4 = soundRef.current) != null && _soundRef$current4.stopAsync && (_soundRef$current5 = soundRef.current) != null && _soundRef$current5.unloadAsync)) {
              _context3.next = 10;
              break;
            }
            _context3.next = 8;
            return soundRef.current.stopAsync();
          case 8:
            _context3.next = 10;
            return (_soundRef$current6 = soundRef.current) == null ? void 0 : _soundRef$current6.unloadAsync();
          case 10:
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
            if (_native.Audio) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.next = 4;
            return _native.Audio.startRecording({
              isMeteringEnabled: true
            }, onRecordingStatusUpdate);
          case 4:
            recordingInfo = _context4.sent;
            accessGranted = recordingInfo.accessGranted;
            if (!accessGranted) {
              _context4.next = 16;
              break;
            }
            setPermissionsGranted(true);
            _recording = recordingInfo.recording;
            if (_recording && typeof _recording !== 'string') {
              _recording.setProgressUpdateInterval(_reactNative.Platform.OS === 'android' ? 100 : 60);
            }
            setRecording(_recording);
            setRecordingStatus('recording');
            _context4.next = 14;
            return stopVoicePlayer();
          case 14:
            _context4.next = 19;
            break;
          case 16:
            setPermissionsGranted(false);
            resetState();
            _reactNative.Alert.alert('Please allow Audio permissions in settings.');
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function startVoiceRecording() {
      return _ref4.apply(this, arguments);
    };
  }();
  var stopSDKVoiceRecording = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (_native.Audio) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            _context5.next = 4;
            return _native.Audio.stopRecording();
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function stopSDKVoiceRecording() {
      return _ref5.apply(this, arguments);
    };
  }();
  var stopVoiceRecording = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return stopSDKVoiceRecording();
          case 2:
            setRecordingStatus('stopped');
          case 3:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function stopVoiceRecording() {
      return _ref6.apply(this, arguments);
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
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!(recordingStatus === 'recording')) {
              _context7.next = 3;
              break;
            }
            _context7.next = 3;
            return stopVoiceRecording();
          case 3:
            if (paused) {
              _context7.next = 6;
              break;
            }
            _context7.next = 6;
            return stopVoicePlayer();
          case 6:
            resetState();
            (0, _native.triggerHaptic)('impactMedium');
          case 8:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function deleteVoiceRecording() {
      return _ref7.apply(this, arguments);
    };
  }();
  var uploadVoiceRecording = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(multiSendEnabled) {
      var durationInSeconds, resampledWaveformData, clearFilter, date, file;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (paused) {
              _context8.next = 3;
              break;
            }
            _context8.next = 3;
            return stopVoicePlayer();
          case 3:
            if (!(recordingStatus === 'recording')) {
              _context8.next = 6;
              break;
            }
            _context8.next = 6;
            return stopVoiceRecording();
          case 6:
            durationInSeconds = parseFloat((recordingDuration / 1000).toFixed(3));
            resampledWaveformData = (0, _audioSampling.resampleWaveformData)(waveformData, 100);
            clearFilter = new RegExp('[.:]', 'g');
            date = new Date().toISOString().replace(clearFilter, '_');
            file = {
              duration: durationInSeconds,
              mimeType: 'audio/aac',
              name: "audio_recording_".concat(date, ".aac"),
              type: _types.FileTypes.VoiceRecording,
              uri: typeof recording !== 'string' ? recording == null ? void 0 : recording.getURI() : recording,
              waveform_data: resampledWaveformData
            };
            if (!multiSendEnabled) {
              _context8.next = 16;
              break;
            }
            _context8.next = 14;
            return uploadNewFile(file);
          case 14:
            _context8.next = 19;
            break;
          case 16:
            _context8.next = 18;
            return uploadNewFile(file);
          case 18:
            setIsScheduleForSubmit(true);
          case 19:
            resetState();
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function uploadVoiceRecording(_x) {
      return _ref8.apply(this, arguments);
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