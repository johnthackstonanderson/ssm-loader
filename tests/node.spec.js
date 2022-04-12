const { getParameters } = require("../dist");

it("should load DOPPLER_ENVIRONMENT of dev", async () => {
    let params = getParameters({ path: "/dev" });
    expect(params.DOPPLER_ENVIRONMENT).toEqual("dev");
});

it("should load DOPPLER_ENVIRONMENT of dev from autoload", async () => {
    process.env.SSM_PATHS = "/dev";
    require("../dist/autoload");

    expect(process.env.DOPPLER_ENVIRONMENT).toEqual("dev");
});
