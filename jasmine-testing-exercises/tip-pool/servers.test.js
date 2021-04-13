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

  afterEach(function() {
    // teardown logic
    serverNameInput.value = ''; 
  });
}); 

describe("Servers test (updating server table)", function() {
  beforeEach(function () {
    serverTbody.innerHTML = '';
  });

  it("should create and add new tr to serverTbody on updateServerTable()", function () {
    updateServerTable();
    const arr = Array.from(serverTbody.rows);
    const servers = Array.from(Object.keys(allServers)).length;
    expect(arr.length).toEqual(servers);
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});