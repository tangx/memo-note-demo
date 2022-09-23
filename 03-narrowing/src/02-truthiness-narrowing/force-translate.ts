
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `现在有 ${numUsersOnline} 在线。`
  }

  return "现在没人在线。"
}
