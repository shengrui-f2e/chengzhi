import { createLocalKey } from '../utils';
describe('api function test', function () {
    test('createLocalKey', function () {
        expect(createLocalKey('test', null, 1024)).toMatch('qiniu_js_sdk_upload_file_name_test_size_1024');
        expect(createLocalKey('test', 'demo', 1024)).toMatch('qiniu_js_sdk_upload_file_name_test_key_demo_size_1024');
    });
});
//# sourceMappingURL=utils.test.js.map