const { getParameters } = require("../dist");

it("should load DOPPLER_ENVIRONMENT of dev", async () => {
    let params = getParameters({ path: "/dev" });
    expect(params.DOPPLER_ENVIRONMENT).toEqual("dev");
});
