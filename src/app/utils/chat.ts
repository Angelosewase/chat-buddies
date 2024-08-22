export function parseDatabaseParticipantsString(participantsString: string): string[] {
  const participantsArray: string[] = participantsString.split(",");
  return participantsArray;
}

export function removeLoggedInUserFromChatParticipantsArray(
  participantsArray: string[],
  userId: string
): string[] {
    if(userId === "")return []
    return participantsArray.filter(participant => participant !== userId);
}
