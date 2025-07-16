#!/bin/bash

# Claude Code 完成任务通知脚本
# 播放系统提示音

# 添加日志记录
LOG_FILE="/tmp/claude-notification.log"
echo "$(date): Hook triggered" >> "$LOG_FILE"

# 检查可用的系统声音
# 默认使用 Glass 声音，也可以选择其他如: Submarine, Blow, Bottle, Frog, Funk, Hero, Morse, Ping, Pop, Purr, Sosumi, Tink
SOUND_NAME="Funk"

# 播放系统声音 (使用 say 命令作为备选)
echo "$(date): Playing sound..." >> "$LOG_FILE"
afplay "/System/Library/Sounds/${SOUND_NAME}.aiff" 2>>"$LOG_FILE" || say "Claude Code finished" 2>>"$LOG_FILE"

# 显示通知横幅和播放声音
echo "$(date): Showing notification..." >> "$LOG_FILE"
osascript -e "display notification \"Claude Code 任务完成\" with title \"Claude Code\" sound name \"Glass\"" 2>>"$LOG_FILE"

echo "$(date): Hook completed" >> "$LOG_FILE"
exit 0