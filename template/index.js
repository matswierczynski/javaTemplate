import { File, Text } from "@asyncapi/generator-react-sdk";

import { PackageDeclaration } from '../components/Common';
import { AsyncApiController } from '../components/AsyncApiController';

export default function({ asyncapi, params }) {
    const pkg = `${params.package}`;
    return (
        <File name="AsyncApiController.java">
            <PackageDeclaration path={pkg} />
            <AsyncApiController />
        </File>
    );
}