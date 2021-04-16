describe("Servers test (with setup and tear-down)", function() {
  
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should create and add new tr to serverTbody on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();
    const arr = Array.from(serverTbody.rows);
    const numServers = Object.keys(allServers).length;
    expect(Object.keys(allServers).length).toEqual(serverId);
    expect(arr.length).toEqual(numServers);
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});