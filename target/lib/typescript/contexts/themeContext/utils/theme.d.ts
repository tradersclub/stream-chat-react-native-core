import type { ColorValue, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { CircleProps, StopProps } from 'react-native-svg';
import type { IconProps } from '../../../icons/utils/base';
export declare const DEFAULT_STATUS_ICON_SIZE = 16;
export declare const Colors: {
    accent_blue: string;
    accent_green: string;
    accent_red: string;
    bg_gradient_end: string;
    bg_gradient_start: string;
    black: string;
    blue_alice: string;
    border: string;
    grey: string;
    grey_dark: string;
    grey_gainsboro: string;
    grey_whisper: string;
    icon_background: string;
    label_bg_transparent: string;
    light_gray: string;
    modal_shadow: string;
    overlay: string;
    shadow_icon: string;
    static_black: string;
    static_white: string;
    targetedMessageBackground: string;
    transparent: string;
    white: string;
    white_smoke: string;
    white_snow: string;
};
export type MarkdownStyle = Partial<{
    autolink: TextStyle;
    blockQuoteBar: ViewStyle;
    blockQuoteSection: ViewStyle;
    blockQuoteSectionBar: ViewStyle;
    blockQuoteText: TextStyle | ViewStyle;
    br: TextStyle;
    codeBlock: TextStyle;
    del: TextStyle;
    em: TextStyle;
    heading: TextStyle;
    heading1: TextStyle;
    heading2: TextStyle;
    heading3: TextStyle;
    heading4: TextStyle;
    heading5: TextStyle;
    heading6: TextStyle;
    hr: ViewStyle;
    image: ImageStyle;
    inlineCode: TextStyle;
    list: ViewStyle;
    listItem: ViewStyle;
    listItemBullet: TextStyle;
    listItemNumber: TextStyle;
    listItemText: TextStyle;
    listRow: ViewStyle;
    mailTo: TextStyle;
    mentions: TextStyle;
    newline: TextStyle;
    noMargin: TextStyle;
    paragraph: TextStyle;
    paragraphCenter: TextStyle;
    paragraphWithImage: ViewStyle;
    strong: TextStyle;
    sublist: ViewStyle;
    table: ViewStyle;
    tableHeader: ViewStyle;
    tableHeaderCell: TextStyle;
    tableRow: ViewStyle;
    tableRowCell: ViewStyle;
    tableRowLast: ViewStyle;
    text: TextStyle;
    u: TextStyle;
    view: ViewStyle;
}>;
export type Theme = {
    attachmentPicker: {
        bottomSheetContentContainer: ViewStyle;
        durationText: TextStyle;
        errorButtonText: TextStyle;
        errorContainer: ViewStyle;
        errorText: TextStyle;
        image: ViewStyle;
        imageOverlay: ViewStyle;
        imageOverlaySelectedComponent: {
            check: ViewStyle;
        };
    };
    attachmentSelectionBar: {
        container: ViewStyle;
        icon: ViewStyle;
    };
    audioAttachment: {
        container: ViewStyle;
        leftContainer: ViewStyle;
        playPauseButton: ViewStyle;
        progressControlContainer: ViewStyle;
        progressDurationText: TextStyle;
        rightContainer: ViewStyle;
        speedChangeButton: ViewStyle;
        speedChangeButtonText: TextStyle;
    };
    avatar: {
        BASE_AVATAR_SIZE: number;
        container: ViewStyle;
        image: ImageStyle;
        presenceIndicator: CircleProps;
        presenceIndicatorContainer: ViewStyle;
    };
    channel: {
        selectChannel: TextStyle;
    };
    channelListFooterLoadingIndicator: {
        container: ViewStyle;
    };
    channelListHeaderErrorIndicator: {
        container: ViewStyle;
        errorText: TextStyle;
    };
    channelListLoadingIndicator: {
        container: ViewStyle;
    };
    channelListMessenger: {
        flatList: ViewStyle;
        flatListContent: ViewStyle;
    };
    channelListSkeleton: {
        animationTime: number;
        background: ViewStyle;
        container: ViewStyle;
        gradientStart: StopProps;
        gradientStop: StopProps;
        height: number;
        maskFillColor?: ColorValue;
    };
    channelPreview: {
        checkAllIcon: IconProps;
        checkIcon: IconProps;
        container: ViewStyle;
        contentContainer: ViewStyle;
        date: TextStyle;
        message: TextStyle & {
            fontWeight: TextStyle['fontWeight'];
        };
        mutedStatus: {
            height: number;
            iconStyle: ViewStyle;
            width: number;
        };
        row: ViewStyle;
        title: TextStyle;
        unreadContainer: ViewStyle;
        unreadText: TextStyle;
    };
    colors: typeof Colors & {
        [key: string]: string;
    };
    dateHeader: {
        container: ViewStyle;
        text: TextStyle;
    };
    emptyStateIndicator: {
        channelContainer: ViewStyle;
        channelDetails: TextStyle;
        channelTitle: TextStyle;
        messageContainer: ViewStyle;
        messageTitle: TextStyle;
    };
    groupAvatar: {
        container: ViewStyle;
        image: ImageStyle;
    };
    iconBadge: {
        icon: ViewStyle;
        iconInner: ViewStyle;
        unreadCount: TextStyle;
    };
    iconSquare: {
        container: ViewStyle;
        image: ImageStyle;
    };
    imageGallery: {
        footer: {
            centerContainer: ViewStyle;
            container: ViewStyle;
            imageCountText: TextStyle;
            innerContainer: ViewStyle;
            leftContainer: ViewStyle;
            rightContainer: ViewStyle;
        };
        grid: {
            container: ViewStyle;
            contentContainer: ViewStyle;
            gridAvatar: ImageStyle;
            gridAvatarWrapper: ViewStyle;
            gridImage: ViewStyle;
            handle: ViewStyle;
            handleText: TextStyle;
            overlay: ViewStyle;
        };
        header: {
            centerContainer: ViewStyle;
            container: ViewStyle;
            dateText: TextStyle;
            innerContainer: ViewStyle;
            leftContainer: ViewStyle;
            rightContainer: ViewStyle;
            usernameText: TextStyle;
        };
        videoControl: {
            durationTextStyle: TextStyle;
            roundedView: ViewStyle;
            videoContainer: ViewStyle;
        };
        backgroundColor?: string;
        pager?: ViewStyle;
        slide?: ImageStyle;
    };
    inlineDateSeparator: {
        container: ViewStyle;
        text: TextStyle;
    };
    loadingDots: {
        container: ViewStyle;
        loadingDot: ViewStyle;
        spacing: number;
    };
    loadingErrorIndicator: {
        container: ViewStyle;
        errorText: TextStyle;
        retryText: TextStyle;
    };
    loadingIndicator: {
        container: ViewStyle;
        loadingText: TextStyle;
    };
    messageInput: {
        attachButton: ViewStyle;
        attachButtonContainer: ViewStyle;
        attachmentSelectionBar: ViewStyle;
        attachmentSeparator: ViewStyle;
        audioRecorder: {
            arrowLeftIcon: IconProps;
            checkContainer: ViewStyle;
            circleStopIcon: IconProps;
            deleteContainer: ViewStyle;
            deleteIcon: IconProps;
            micContainer: ViewStyle;
            micIcon: IconProps;
            pausedContainer: ViewStyle;
            sendCheckIcon: IconProps;
            slideToCancelContainer: ViewStyle;
        };
        audioRecordingButton: {
            container: ViewStyle;
            micIcon: IconProps;
        };
        audioRecordingInProgress: {
            container: ViewStyle;
            durationText: TextStyle;
        };
        audioRecordingLockIndicator: {
            arrowUpIcon: IconProps;
            container: ViewStyle;
            lockIcon: IconProps;
        };
        audioRecordingPreview: {
            container: ViewStyle;
            currentTime: TextStyle;
            infoContainer: ViewStyle;
            pauseIcon: IconProps;
            playIcon: IconProps;
            progressBar: ViewStyle;
        };
        audioRecordingWaveform: {
            container: ViewStyle;
            waveform: ViewStyle;
        };
        autoCompleteInputContainer: ViewStyle;
        commandsButton: ViewStyle;
        commandsButtonContainer: ViewStyle;
        composerContainer: ViewStyle;
        container: ViewStyle;
        cooldownTimer: {
            container: ViewStyle;
            text: TextStyle;
        };
        editingBoxContainer: ViewStyle;
        editingBoxHeader: ViewStyle;
        editingBoxHeaderTitle: TextStyle;
        editingStateHeader: {
            editingBoxHeader: ViewStyle;
            editingBoxHeaderTitle: TextStyle;
        };
        fileUploadPreview: {
            dismiss: ViewStyle;
            fileContainer: ViewStyle;
            filenameText: TextStyle;
            fileSizeText: TextStyle;
            fileTextContainer: ViewStyle;
            flatList: ViewStyle;
        };
        focusedInputBoxContainer: ViewStyle;
        giphyCommandInput: {
            giphyContainer: ViewStyle;
            giphyText: TextStyle;
        };
        imageUploadPreview: {
            dismiss: ViewStyle;
            dismissIconColor: ColorValue;
            flatList: ViewStyle;
            itemContainer: ViewStyle;
            upload: ImageStyle;
        };
        inputBox: TextStyle;
        inputBoxContainer: ViewStyle;
        micButtonContainer: ViewStyle;
        moreOptionsButton: ViewStyle;
        nativeAttachmentPicker: {
            buttonContainer: ViewStyle;
            buttonDimmerStyle: ViewStyle;
            container: ViewStyle;
        };
        optionsContainer: ViewStyle;
        replyContainer: ViewStyle;
        searchIcon: IconProps;
        sendButton: ViewStyle;
        sendButtonContainer: ViewStyle;
        sendMessageDisallowedIndicator: {
            container: ViewStyle;
            text: TextStyle;
        };
        sendRightIcon: IconProps;
        sendUpIcon: IconProps;
        showThreadMessageInChannelButton: {
            check: IconProps;
            checkBoxActive: ViewStyle;
            checkBoxInactive: ViewStyle;
            container: ViewStyle;
            innerContainer: ViewStyle;
            text: TextStyle;
        };
        suggestions: {
            command: {
                args: TextStyle;
                container: ViewStyle;
                iconContainer: ViewStyle;
                title: TextStyle;
            };
            emoji: {
                container: ViewStyle;
                text: TextStyle;
            };
            header: {
                container: ViewStyle;
                title: TextStyle;
            };
            item: ViewStyle;
            mention: {
                avatarSize: number;
                column: ViewStyle;
                container: ViewStyle;
                name: TextStyle;
                tag: TextStyle;
            };
        };
        suggestionsListContainer: {
            container: ViewStyle;
            flatlist: ViewStyle;
        };
        uploadProgressIndicator: {
            container: ViewStyle;
            indicatorColor: string;
            overlay: ViewStyle;
        };
    };
    messageList: {
        container: ViewStyle;
        contentContainer: ViewStyle;
        errorNotification: ViewStyle;
        errorNotificationText: TextStyle;
        inlineUnreadIndicator: {
            container: ViewStyle;
            text: TextStyle;
        };
        listContainer: ViewStyle;
        messageContainer: ViewStyle;
        messageSystem: {
            container: ViewStyle;
            dateText: TextStyle;
            line: ViewStyle;
            text: TextStyle;
            textContainer: ViewStyle;
        };
        scrollToBottomButton: {
            container: ViewStyle;
            touchable: ViewStyle;
            unreadCountNotificationContainer: ViewStyle;
            unreadCountNotificationText: TextStyle;
            wrapper: ViewStyle;
            chevronColor?: ColorValue;
        };
        typingIndicatorContainer: ViewStyle;
    };
    messageSimple: {
        actions: {
            button: ViewStyle & {
                defaultBackgroundColor?: ViewStyle['backgroundColor'];
                defaultBorderColor?: ViewStyle['borderColor'];
                primaryBackgroundColor?: ViewStyle['backgroundColor'];
                primaryBorderColor?: ViewStyle['borderColor'];
            };
            buttonText: TextStyle & {
                defaultColor?: TextStyle['color'];
                primaryColor?: TextStyle['color'];
            };
            container: ViewStyle;
        };
        avatarWrapper: {
            container: ViewStyle;
            leftAlign: ViewStyle;
            rightAlign: ViewStyle;
            spacer: ViewStyle;
        };
        card: {
            authorName: TextStyle;
            authorNameContainer: ViewStyle;
            authorNameFooter: TextStyle;
            authorNameFooterContainer: ViewStyle;
            authorNameMask: ViewStyle;
            container: ViewStyle;
            cover: ImageStyle;
            footer: ViewStyle & {
                description: TextStyle;
                title: TextStyle;
            };
            noURI: ViewStyle;
            playButtonStyle: {
                durationTextStyle: TextStyle;
                roundedView: ViewStyle;
                videoContainer: ViewStyle;
            };
            playIcon: IconProps;
        };
        container: ViewStyle;
        content: {
            container: ViewStyle & {
                borderRadiusL: ViewStyle['borderBottomLeftRadius' | 'borderTopLeftRadius'];
                borderRadiusS: ViewStyle['borderBottomRightRadius' | 'borderTopRightRadius'];
            };
            containerInner: ViewStyle;
            deletedContainer: ViewStyle;
            deletedContainerInner: ViewStyle;
            deletedMetaText: TextStyle;
            deletedText: MarkdownStyle;
            editedLabel: TextStyle;
            editedTimestampContainer: ViewStyle;
            errorContainer: ViewStyle;
            errorIcon: IconProps;
            errorIconContainer: ViewStyle;
            eyeIcon: IconProps;
            /**
             * Available options for styling text:
             * https://github.com/andangrd/react-native-markdown-package/blob/main/styles.js
             */
            markdown: MarkdownStyle;
            messageUser: TextStyle;
            metaContainer: ViewStyle;
            metaText: TextStyle;
            replyBorder: ViewStyle;
            replyContainer: ViewStyle;
            textContainer: ViewStyle & {
                onlyEmojiMarkdown: MarkdownStyle;
            };
            wrapper: ViewStyle;
            receiverMessageBackgroundColor?: ColorValue;
            senderMessageBackgroundColor?: ColorValue;
            timestampText?: TextStyle;
        };
        file: {
            container: ViewStyle;
            details: ViewStyle;
            fileSize: TextStyle;
            icon: IconProps;
            title: TextStyle;
        };
        fileAttachmentGroup: {
            attachmentContainer: ViewStyle;
            container: ViewStyle;
        };
        gallery: {
            galleryContainer: ViewStyle;
            galleryItemColumn: ViewStyle;
            gridHeight: number;
            gridWidth: number;
            image: ImageStyle;
            imageContainer: ViewStyle;
            maxHeight: number;
            maxWidth: number;
            minHeight: number;
            minWidth: number;
            moreImagesContainer: ViewStyle;
            moreImagesText: TextStyle;
            thumbnail: ViewStyle;
            imageBorderRadius?: {
                borderBottomLeftRadius: number;
                borderBottomRightRadius: number;
                borderTopLeftRadius: number;
                borderTopRightRadius: number;
            };
        };
        giphy: {
            buttonContainer: ViewStyle;
            cancel: TextStyle;
            container: ViewStyle;
            giphy: ImageStyle;
            giphyContainer: ViewStyle;
            giphyHeaderText: TextStyle;
            giphyHeaderTitle: TextStyle;
            giphyMask: ViewStyle;
            giphyMaskText: TextStyle;
            header: ViewStyle;
            selectionContainer: ViewStyle;
            send: TextStyle;
            shuffle: TextStyle;
            title: TextStyle;
        };
        lastMessageContainer: ViewStyle;
        loadingIndicator: {
            container: ViewStyle;
            roundedView: ViewStyle;
        };
        messageGroupedSingleOrBottomContainer: ViewStyle;
        messageGroupedTopContainer: ViewStyle;
        pinnedHeader: {
            container: ViewStyle;
            label: TextStyle;
        };
        reactionList: {
            container: ViewStyle;
            iconFillColor: ColorValue;
            middleIcon: ViewStyle;
            radius: number;
            reactionBubble: ViewStyle;
            reactionContainer: ViewStyle;
            reactionCount: TextStyle;
            reactionSize: number;
            strokeSize: number;
        };
        replies: {
            avatar: ViewStyle;
            avatarContainerMultiple: ViewStyle;
            avatarContainerSingle: ViewStyle;
            container: ViewStyle;
            leftAvatarsContainer: ViewStyle;
            leftCurve: ViewStyle;
            messageRepliesText: TextStyle;
            rightAvatarsContainer: ViewStyle;
            rightCurve: ViewStyle;
            avatarSize?: number;
        };
        status: {
            checkAllIcon: IconProps;
            checkIcon: IconProps;
            readByCount: TextStyle;
            statusContainer: ViewStyle;
            timeIcon: IconProps;
        };
        targetedMessageContainer: ViewStyle;
        targetedMessageUnderlay: ViewStyle;
        videoThumbnail: {
            container: ViewStyle;
            roundedView: ViewStyle;
        };
    };
    overlay: {
        container: ViewStyle;
        messageActions: {
            actionContainer: ViewStyle;
            icon: ViewStyle;
            title: TextStyle;
        };
        padding: number;
        reactions: {
            avatarContainer: ViewStyle;
            avatarName: TextStyle;
            avatarSize: number;
            container: ViewStyle;
            flatListContainer: ViewStyle;
            radius: number;
            reactionBubble: ViewStyle;
            reactionBubbleBackground: ViewStyle;
            reactionBubbleBorderRadius: number;
            title: TextStyle;
        };
        reactionsList: {
            radius: number;
            reaction: ViewStyle;
            reactionList: ViewStyle;
            reactionListBorderRadius: number;
            reactionSize: number;
        };
    };
    progressControl: {
        container: ViewStyle;
        filledColor: ColorValue;
        filledStyles: ViewStyle;
        thumb: ViewStyle;
    };
    reply: {
        container: ViewStyle;
        fileAttachmentContainer: ViewStyle;
        imageAttachment: ImageStyle;
        markdownStyles: MarkdownStyle;
        messageContainer: ViewStyle;
        secondaryText: ViewStyle;
        textContainer: ViewStyle;
        videoThumbnail: {
            container: ViewStyle;
            image: ImageStyle;
        };
    };
    screenPadding: number;
    spinner: ViewStyle;
    thread: {
        newThread: ViewStyle & {
            text: TextStyle;
            backgroundGradientStart?: string;
            backgroundGradientStop?: string;
            threadHeight?: number;
        };
    };
    typingIndicator: {
        container: ViewStyle;
        text: TextStyle & {
            fontSize: TextStyle['fontSize'];
        };
    };
    waveProgressBar: {
        container: ViewStyle;
        thumb: ViewStyle;
        waveform: ViewStyle;
    };
};
export declare const defaultTheme: Theme;
//# sourceMappingURL=theme.d.ts.map