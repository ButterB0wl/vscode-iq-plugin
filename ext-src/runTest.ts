/*
 * Copyright (c) 2019-present Sonatype, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as path from 'path';

import { runTests } from 'vscode-test';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		// const extensionTestsPath = path.resolve(__dirname, './suite/index');
		// ext tests are adjacent to production code
		const extensionTestsPath = path.resolve(__dirname, '../../');

		// Download VS Code, unzip it and run the integration test
		await runTests({ 
			version: '1.46.1',
			extensionDevelopmentPath, extensionTestsPath 
			});
	} catch (err) {
		console.error(err)
		console.error('Failed to run tests');
	}
}

main();