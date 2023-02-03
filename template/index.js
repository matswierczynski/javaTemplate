import { File } from '@asyncapi/generator-react-sdk';

import { AsyncApiController } from '../components/AsyncApiController';
import { javaPackageToPath } from '../utils/String.utils';

export default function({ params }) {
    const filePath = `${javaPackageToPath(params.package)}AsyncApiController.java`;
    return (
        <File name={filePath}>
            <AsyncApiController />
        </File>
    );
}