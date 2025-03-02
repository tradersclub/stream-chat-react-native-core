Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.DEFAULT_STATUS_ICON_SIZE = exports.Colors = void 0;
var DEFAULT_STATUS_ICON_SIZE = 16;
exports.DEFAULT_STATUS_ICON_SIZE = DEFAULT_STATUS_ICON_SIZE;
var Colors = {
  accent_blue: '#005FFF',
  accent_green: '#20E070',
  accent_red: '#FF3742',
  bg_gradient_end: '#F7F7F7',
  bg_gradient_start: '#FCFCFC',
  black: '#000000',
  blue_alice: '#E9F2FF',
  border: '#00000014',
  grey: '#7A7A7A',
  grey_dark: '#72767E',
  grey_gainsboro: '#DBDBDB',
  grey_whisper: '#ECEBEB',
  icon_background: '#FFFFFF',
  label_bg_transparent: '#00000033',
  light_gray: '#DBDDE1',
  modal_shadow: '#00000099',
  overlay: '#000000CC',
  shadow_icon: '#00000040',
  static_black: '#000000',
  static_white: '#ffffff',
  targetedMessageBackground: '#FBF4DD',
  transparent: 'transparent',
  white: '#FFFFFF',
  white_smoke: '#F2F2F2',
  white_snow: '#FCFCFC'
};
exports.Colors = Colors;
var defaultTheme = {
  attachmentPicker: {
    bottomSheetContentContainer: {},
    durationText: {},
    errorButtonText: {},
    errorContainer: {},
    errorText: {},
    image: {},
    imageOverlay: {},
    imageOverlaySelectedComponent: {
      check: {}
    }
  },
  attachmentSelectionBar: {
    container: {},
    icon: {}
  },
  audioAttachment: {
    container: {},
    leftContainer: {},
    playPauseButton: {},
    progressControlContainer: {},
    progressDurationText: {},
    rightContainer: {},
    speedChangeButton: {},
    speedChangeButtonText: {}
  },
  avatar: {
    BASE_AVATAR_SIZE: 32,
    container: {},
    image: {
      borderRadius: 16,
      height: 32,
      width: 32
    },
    presenceIndicator: {
      cx: 6,
      cy: 6,
      r: 5,
      strokeWidth: 2
    },
    presenceIndicatorContainer: {}
  },
  channel: {
    selectChannel: {}
  },
  channelListFooterLoadingIndicator: {
    container: {}
  },
  channelListHeaderErrorIndicator: {
    container: {},
    errorText: {}
  },
  channelListLoadingIndicator: {
    container: {}
  },
  channelListMessenger: {
    flatList: {},
    flatListContent: {}
  },
  channelListSkeleton: {
    animationTime: 1800,
    background: {},
    container: {},
    gradientStart: {
      stopOpacity: 0
    },
    gradientStop: {
      stopOpacity: 0.5
    },
    height: 64
  },
  channelPreview: {
    checkAllIcon: {
      height: DEFAULT_STATUS_ICON_SIZE,
      width: DEFAULT_STATUS_ICON_SIZE
    },
    checkIcon: {
      height: DEFAULT_STATUS_ICON_SIZE,
      width: DEFAULT_STATUS_ICON_SIZE
    },
    container: {},
    contentContainer: {},
    date: {},
    message: {
      fontWeight: '400'
    },
    mutedStatus: {
      height: 20,
      iconStyle: {},
      width: 20
    },
    row: {},
    title: {},
    unreadContainer: {},
    unreadText: {}
  },
  colors: Object.assign({}, Colors),
  dateHeader: {
    container: {},
    text: {}
  },
  emptyStateIndicator: {
    channelContainer: {},
    channelDetails: {},
    channelTitle: {},
    messageContainer: {},
    messageTitle: {}
  },
  groupAvatar: {
    container: {},
    image: {
      resizeMode: 'cover'
    }
  },
  iconBadge: {
    icon: {},
    iconInner: {},
    unreadCount: {}
  },
  iconSquare: {
    container: {},
    image: {}
  },
  imageGallery: {
    footer: {
      centerContainer: {},
      container: {},
      imageCountText: {},
      innerContainer: {},
      leftContainer: {},
      rightContainer: {}
    },
    grid: {
      container: {},
      contentContainer: {},
      gridAvatar: {},
      gridAvatarWrapper: {},
      gridImage: {},
      handle: {},
      handleText: {},
      overlay: {}
    },
    header: {
      centerContainer: {},
      container: {},
      dateText: {},
      innerContainer: {},
      leftContainer: {},
      rightContainer: {},
      usernameText: {}
    },
    videoControl: {
      durationTextStyle: {},
      roundedView: {},
      videoContainer: {}
    }
  },
  inlineDateSeparator: {
    container: {},
    text: {}
  },
  loadingDots: {
    container: {},
    loadingDot: {},
    spacing: 4
  },
  loadingErrorIndicator: {
    container: {},
    errorText: {},
    retryText: {}
  },
  loadingIndicator: {
    container: {},
    loadingText: {}
  },
  messageInput: {
    attachButton: {},
    attachButtonContainer: {},
    attachmentSelectionBar: {},
    attachmentSeparator: {},
    audioRecorder: {
      arrowLeftIcon: {},
      checkContainer: {},
      circleStopIcon: {},
      deleteContainer: {},
      deleteIcon: {},
      micContainer: {},
      micIcon: {},
      pausedContainer: {},
      sendCheckIcon: {},
      slideToCancelContainer: {}
    },
    audioRecordingButton: {
      container: {},
      micIcon: {}
    },
    audioRecordingInProgress: {
      container: {},
      durationText: {}
    },
    audioRecordingLockIndicator: {
      arrowUpIcon: {},
      container: {},
      lockIcon: {}
    },
    audioRecordingPreview: {
      container: {},
      currentTime: {},
      infoContainer: {},
      pauseIcon: {},
      playIcon: {},
      progressBar: {}
    },
    audioRecordingWaveform: {
      container: {},
      waveform: {}
    },
    autoCompleteInputContainer: {},
    commandsButton: {},
    commandsButtonContainer: {},
    composerContainer: {},
    container: {},
    cooldownTimer: {
      container: {},
      text: {}
    },
    editingBoxContainer: {},
    editingBoxHeader: {},
    editingBoxHeaderTitle: {},
    editingStateHeader: {
      editingBoxHeader: {},
      editingBoxHeaderTitle: {}
    },
    fileUploadPreview: {
      dismiss: {},
      fileContainer: {},
      filenameText: {},
      fileSizeText: {},
      fileTextContainer: {},
      flatList: {}
    },
    focusedInputBoxContainer: {},
    giphyCommandInput: {
      giphyContainer: {},
      giphyText: {}
    },
    imageUploadPreview: {
      dismiss: {},
      dismissIconColor: '',
      flatList: {},
      itemContainer: {},
      upload: {}
    },
    inputBox: {},
    inputBoxContainer: {},
    micButtonContainer: {},
    moreOptionsButton: {},
    nativeAttachmentPicker: {
      buttonContainer: {},
      buttonDimmerStyle: {},
      container: {}
    },
    optionsContainer: {},
    replyContainer: {},
    searchIcon: {},
    sendButton: {},
    sendButtonContainer: {},
    sendMessageDisallowedIndicator: {
      container: {},
      text: {}
    },
    sendRightIcon: {},
    sendUpIcon: {},
    showThreadMessageInChannelButton: {
      check: {},
      checkBoxActive: {},
      checkBoxInactive: {},
      container: {},
      innerContainer: {},
      text: {}
    },
    suggestions: {
      command: {
        args: {},
        container: {},
        iconContainer: {},
        title: {}
      },
      emoji: {
        container: {},
        text: {}
      },
      header: {
        container: {},
        title: {}
      },
      item: {},
      mention: {
        avatarSize: 40,
        column: {},
        container: {},
        name: {},
        tag: {}
      }
    },
    suggestionsListContainer: {
      container: {},
      flatlist: {}
    },
    uploadProgressIndicator: {
      container: {},
      indicatorColor: '',
      overlay: {}
    }
  },
  messageList: {
    container: {},
    contentContainer: {},
    errorNotification: {},
    errorNotificationText: {},
    inlineUnreadIndicator: {
      container: {},
      text: {}
    },
    listContainer: {},
    messageContainer: {},
    messageSystem: {
      container: {},
      dateText: {},
      line: {},
      text: {},
      textContainer: {}
    },
    scrollToBottomButton: {
      container: {},
      touchable: {},
      unreadCountNotificationContainer: {},
      unreadCountNotificationText: {},
      wrapper: {}
    },
    typingIndicatorContainer: {}
  },
  messageSimple: {
    actions: {
      button: {},
      buttonText: {},
      container: {}
    },
    avatarWrapper: {
      container: {},
      leftAlign: {
        marginRight: 8
      },
      rightAlign: {
        marginLeft: 8
      },
      spacer: {
        height: 28,
        width: 32
      }
    },
    card: {
      authorName: {},
      authorNameContainer: {},
      authorNameFooter: {},
      authorNameFooterContainer: {},
      authorNameMask: {},
      container: {},
      cover: {},
      footer: {
        description: {},
        title: {
          fontWeight: '700'
        }
      },
      noURI: {
        borderLeftWidth: 2,
        paddingLeft: 8
      },
      playButtonStyle: {
        durationTextStyle: {},
        roundedView: {},
        videoContainer: {}
      },
      playIcon: {
        height: 32,
        width: 32
      }
    },
    container: {},
    content: {
      container: {
        borderRadiusL: 16,
        borderRadiusS: 0
      },
      containerInner: {},
      deletedContainer: {},
      deletedContainerInner: {},
      deletedMetaText: {
        paddingHorizontal: 5
      },
      deletedText: {
        em: {
          fontSize: 15,
          fontStyle: 'italic',
          fontWeight: '400'
        }
      },
      editedLabel: {},
      editedTimestampContainer: {},
      errorContainer: {
        paddingRight: 12,
        paddingTop: 0
      },
      errorIcon: {
        height: 20,
        width: 20
      },
      errorIconContainer: {
        bottom: -2,
        position: 'absolute',
        right: -12
      },
      eyeIcon: {
        height: 16,
        width: 16
      },
      markdown: {},
      messageUser: {
        fontSize: 12,
        fontWeight: '700',
        paddingRight: 6
      },
      metaContainer: {},
      metaText: {
        fontSize: 12
      },
      replyBorder: {},
      replyContainer: {},
      textContainer: {
        onlyEmojiMarkdown: {
          text: {
            fontSize: 50
          }
        }
      },
      timestampText: {},
      wrapper: {}
    },
    file: {
      container: {},
      details: {},
      fileSize: {},
      icon: {},
      title: {}
    },
    fileAttachmentGroup: {
      attachmentContainer: {},
      container: {}
    },
    gallery: {
      galleryContainer: {},
      galleryItemColumn: {},
      gridHeight: 195,
      gridWidth: 256,
      image: {},
      imageBorderRadius: undefined,
      imageContainer: {},
      maxHeight: 300,
      maxWidth: 256,
      minHeight: 100,
      minWidth: 170,
      moreImagesContainer: {},
      moreImagesText: {},
      thumbnail: {}
    },
    giphy: {
      buttonContainer: {},
      cancel: {},
      container: {},
      giphy: {},
      giphyContainer: {},
      giphyHeaderText: {},
      giphyHeaderTitle: {},
      giphyMask: {},
      giphyMaskText: {},
      header: {},
      selectionContainer: {},
      send: {},
      shuffle: {},
      title: {}
    },
    lastMessageContainer: {},
    loadingIndicator: {
      container: {},
      roundedView: {}
    },
    messageGroupedSingleOrBottomContainer: {},
    messageGroupedTopContainer: {},
    pinnedHeader: {
      container: {},
      label: {}
    },
    reactionList: {
      container: {},
      iconFillColor: '',
      middleIcon: {},
      radius: 2,
      reactionBubble: {},
      reactionContainer: {},
      reactionCount: {},
      reactionSize: 24,
      strokeSize: 1
    },
    replies: {
      avatar: {},
      avatarContainerMultiple: {},
      avatarContainerSingle: {},
      container: {},
      leftAvatarsContainer: {},
      leftCurve: {},
      messageRepliesText: {},
      rightAvatarsContainer: {},
      rightCurve: {}
    },
    status: {
      checkAllIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      },
      checkIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      },
      readByCount: {},
      statusContainer: {},
      timeIcon: {
        height: DEFAULT_STATUS_ICON_SIZE,
        width: DEFAULT_STATUS_ICON_SIZE
      }
    },
    targetedMessageContainer: {},
    targetedMessageUnderlay: {},
    videoThumbnail: {
      container: {},
      roundedView: {}
    }
  },
  overlay: {
    container: {},
    messageActions: {
      actionContainer: {},
      icon: {},
      title: {}
    },
    padding: 8,
    reactions: {
      avatarContainer: {},
      avatarName: {},
      avatarSize: 64,
      container: {},
      flatListContainer: {},
      radius: 2,
      reactionBubble: {},
      reactionBubbleBackground: {},
      reactionBubbleBorderRadius: 24,
      title: {}
    },
    reactionsList: {
      radius: 2.5,
      reaction: {},
      reactionList: {},
      reactionListBorderRadius: 24,
      reactionSize: 24
    }
  },
  progressControl: {
    container: {},
    filledColor: '',
    filledStyles: {},
    thumb: {}
  },
  reply: {
    container: {},
    fileAttachmentContainer: {},
    imageAttachment: {},
    markdownStyles: {},
    messageContainer: {},
    secondaryText: {},
    textContainer: {},
    videoThumbnail: {
      container: {},
      image: {}
    }
  },
  screenPadding: 8,
  spinner: {},
  thread: {
    newThread: {
      text: {}
    }
  },
  typingIndicator: {
    container: {},
    text: {
      fontSize: 14
    }
  },
  waveProgressBar: {
    container: {},
    thumb: {},
    waveform: {}
  }
};
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=theme.js.map