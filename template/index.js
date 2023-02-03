import { File, Text } from "@asyncapi/generator-react-sdk";

import { PackageDeclaration } from '../components/Common';
import { javaPackageToPath } from '../utils/String.utils';
import { AsyncApiController } from '../components/AsyncApiController';

export default function({ asyncapi, params }) {
    const filePath = `${javaPackageToPath(params.package)}`;
    const pkg = `${params.package}`;
    return (
        <File name={filePath}>
            <PackageDeclaration path={pkg} />
            <AsyncApiController />
        </File>
    );
}