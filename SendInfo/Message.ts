function stringLog(PORT: any): string {
  let messagePort = `Port Listening: | http://localhost:${PORT}`;
  return messagePort;
}

export default stringLog;
