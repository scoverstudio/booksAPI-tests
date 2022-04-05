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
    expect(formatFullname("John Doe test")).to.equal("Error");
    expect(formatFullname("John")).to.equal("Error");
  });

  it("should return formated 'fullname' if arg is correct", () => {
    expect(formatFullname("John Doe")).to.equal("John Doe");
    expect(formatFullname("JoHn DOe")).to.equal("John Doe");
    expect(formatFullname("JOHN DOE")).to.equal("John Doe");
    expect(formatFullname("john doe")).to.equal("John Doe");
  });

  it("should return an false if arg includes unnecessary spaces", () => {
    expect(formatFullname(" ab cd")).to.be.false;
    expect(formatFullname("ab  cd")).to.be.false;
  });
});
