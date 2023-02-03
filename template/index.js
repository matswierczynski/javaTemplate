import { File } from "@asyncapi/generator-react-sdk";
import { includeFile, renderSpec, stringifySpec, stringifyConfiguration } from  '../filters/all';
import { HTML, Head, Body } from "../components/Common";

import { PackageDeclaration } from '../components/Common';
import { AsyncApiController } from '../components/AsyncApiController';

export default function({ asyncapi, params }) {
    const pkg = `${params.package}`;
    return [
        <File name="AsyncApiController.java">
            <PackageDeclaration path={pkg} />
            <AsyncApiController />
        </File>,
        <File name="index.html">
            <HTML>
                <Head
                    title={`${asyncapi.info().title()} ${asyncapi.info().version()} documentation`}
                    cssLinks={'css/global.min.css'}
                    styleContent={includeFile('template/css/asyncapi.min.css')}
                />
                <Body>
                    {`<div id="root">${renderSpec(asyncapi,params)}</div>`}
                    <Scripts asyncapi={asyncapi} params={params} />
                </Body>
            </HTML>
        </File>
    ]
}

function Scripts({ asyncapi, params }) {
        return `
        <script src="js/asyncapi-ui.min.js" type="application/javascript"></script>
        <script>
          var schema = ${stringifySpec(asyncapi)};
          var config = ${stringifyConfiguration(params)};
          AsyncApiStandalone.hydrate({ schema, config }, document.getElementById("root"));
        </script>
    `
}