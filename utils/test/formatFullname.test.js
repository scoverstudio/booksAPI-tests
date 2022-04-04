const formatFullname = require("../formatFullname");
const expect = require("chai").expect;

describe("FormatFullname", () => {
  it('should return an error if "fullname" arg is empty', () => {
    expect(formatFullname("")).to.equal("Error");
  });

  it('should return an error if "fullname" arg is not a String', () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(12)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });

  it('should return an error if "fullname" arg not include only <firstname> and <lastname>', () => {
    expect(formatFullname('John Doe test')).to.equal("Error");
    expect(formatFullname('John')).to.equal("Error");
  });
});
