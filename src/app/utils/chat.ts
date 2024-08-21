export function parseDatabaseUserString(participantsString: string): string[] {
  const participantsArray: string[] = participantsString.split(",");
  return participantsArray;
}

export function removeLoggedInUserFromChatParticipantsArray(
  participantsArray: string[],
  userId: string
): string[] {

    return participantsArray.filter(participant => participant !== userId);
}
