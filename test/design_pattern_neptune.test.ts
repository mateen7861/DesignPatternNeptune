import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DesignPatternNeptune from '../lib/design_pattern_neptune-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DesignPatternNeptune.DesignPatternNeptuneStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
