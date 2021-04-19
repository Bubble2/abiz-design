(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [56],
  {
    '9xMd': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['active-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['active-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Bjia: function(e, t, a) {
      'use strict';
      var l = a('0Owb'),
        n = a('PpiC'),
        r = a('cDcd'),
        c = a.n(r),
        m = a('ZpkN');
      t['a'] = c.a.forwardRef((e, t) => {
        var a = e.children,
          r = Object(n['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(l['default'])({}, r, { forwardedRef: t }),
          c.a.createElement(c.a.Fragment, null, a),
        );
      });
    },
    DdmH: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h2',
              { id: 'api' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            n.a.createElement(
              'h3',
              { id: 'skeleton' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#skeleton', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Skeleton',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'active'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'avatar'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u5934\u50cf\u5360\u4f4d\u56fe',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'boolean | ',
                    n.a.createElement(
                      r['AnchorLink'],
                      { to: '#SkeletonAvatarProps' },
                      'SkeletonAvatarProps',
                    ),
                  ),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'loading'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u4e3a true \u65f6\uff0c\u663e\u793a\u5360\u4f4d\u56fe\u3002\u53cd\u4e4b\u5219\u76f4\u63a5\u5c55\u793a\u5b50\u7ec4\u4ef6',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'paragraph'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u6bb5\u843d\u5360\u4f4d\u56fe',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'boolean | ',
                    n.a.createElement(
                      r['AnchorLink'],
                      { to: '#SkeletonParagraphProps' },
                      'SkeletonParagraphProps',
                    ),
                  ),
                  n.a.createElement('td', null, 'true'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'round'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u4e3a true \u65f6\uff0c\u6bb5\u843d\u548c\u6807\u9898\u663e\u793a\u5706\u89d2',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'title'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u6807\u9898\u5360\u4f4d\u56fe',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'boolean | ',
                    n.a.createElement(
                      r['AnchorLink'],
                      { to: '#SkeletonTitleProps' },
                      'SkeletonTitleProps',
                    ),
                  ),
                  n.a.createElement('td', null, 'true'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'skeletonavatarprops' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#skeletonavatarprops',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'SkeletonAvatarProps',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'active'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c\uff0c\u4ec5\u5728\u5355\u72ec\u4f7f\u7528\u5934\u50cf\u9aa8\u67b6\u65f6\u751f\u6548',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'shape'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5934\u50cf\u7684\u5f62\u72b6',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'circle'),
                    ' | ',
                    n.a.createElement('code', null, 'square'),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5934\u50cf\u5360\u4f4d\u56fe\u7684\u5927\u5c0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'number | ',
                    n.a.createElement('code', null, 'large'),
                    ' | ',
                    n.a.createElement('code', null, 'small'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'skeletontitleprops' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#skeletontitleprops',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'SkeletonTitleProps',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'width'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6807\u9898\u5360\u4f4d\u56fe\u7684\u5bbd\u5ea6',
                  ),
                  n.a.createElement('td', null, 'number | string'),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'skeletonparagraphprops' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#skeletonparagraphprops',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'SkeletonParagraphProps',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'rows'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6bb5\u843d\u5360\u4f4d\u56fe\u7684\u884c\u6570',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'width'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6bb5\u843d\u5360\u4f4d\u56fe\u7684\u5bbd\u5ea6\uff0c\u82e5\u4e3a\u6570\u7ec4\u65f6\u5219\u4e3a\u5bf9\u5e94\u7684\u6bcf\u884c\u5bbd\u5ea6\uff0c\u53cd\u4e4b\u5219\u662f\u6700\u540e\u4e00\u884c\u7684\u5bbd\u5ea6',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'number | string | Array<number | string>',
                  ),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'skeletonbuttonprops' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#skeletonbuttonprops',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'SkeletonButtonProps',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'active'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'shape'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u6309\u94ae\u7684\u5f62\u72b6',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'circle'),
                    ' | ',
                    n.a.createElement('code', null, 'round'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6309\u94ae\u7684\u5927\u5c0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'large'),
                    ' | ',
                    n.a.createElement('code', null, 'small'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'skeletoninputprops' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#skeletoninputprops',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'SkeletonInputProps',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u5c5e\u6027'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'active'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u5927\u5c0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'large'),
                    ' | ',
                    n.a.createElement('code', null, 'small'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
    EKK8: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['basic-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['basic-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    EatZ: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['children-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['children-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    HpKB: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['list-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['list-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    KFSX: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'p',
              null,
              '\u5728\u9700\u8981\u7b49\u5f85\u52a0\u8f7d\u5185\u5bb9\u7684\u4f4d\u7f6e\u63d0\u4f9b\u4e00\u4e2a\u5360\u4f4d\u56fe\u5f62\u7ec4\u5408\u3002',
            ),
            n.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4f55\u65f6\u4f7f\u7528',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                '\u7f51\u7edc\u8f83\u6162\uff0c\u9700\u8981\u957f\u65f6\u95f4\u7b49\u5f85\u52a0\u8f7d\u5904\u7406\u7684\u60c5\u51b5\u4e0b\u3002',
              ),
              n.a.createElement(
                'li',
                null,
                '\u56fe\u6587\u4fe1\u606f\u5185\u5bb9\u8f83\u591a\u7684\u5217\u8868/\u5361\u7247\u4e2d\u3002',
              ),
              n.a.createElement(
                'li',
                null,
                '\u53ea\u5728\u7b2c\u4e00\u6b21\u52a0\u8f7d\u6570\u636e\u7684\u65f6\u5019\u4f7f\u7528\u3002',
              ),
              n.a.createElement(
                'li',
                null,
                '\u53ef\u4ee5\u88ab Spin \u5b8c\u5168\u4ee3\u66ff\uff0c\u4f46\u662f\u5728\u53ef\u7528\u7684\u573a\u666f\u4e0b\u53ef\u4ee5\u6bd4 Spin \u63d0\u4f9b\u66f4\u597d\u7684\u89c6\u89c9\u6548\u679c\u548c\u7528\u6237\u4f53\u9a8c\u3002',
              ),
            ),
          ),
        );
      };
    },
    VUBR: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq'),
        c = a('g5U0'),
        m = (a('ekZX'), a('ltCa'));
      a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h1',
              { id: '\u9aa8\u67b6\u5c4f' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u9aa8\u67b6\u5c4f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u9aa8\u67b6\u5c4f',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('KFSX').default(),
              }),
            ),
            n.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4ee3\u7801\u6f14\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
            n.a.createElement(
              m['a'],
              { gutter: '8' },
              n.a.createElement(
                c['a'],
                { span: 24 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('EKK8').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('sSyK').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('9xMd').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('yh9z').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('EatZ').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('HpKB').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('DdmH').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, t, a) {
      'use strict';
      var l = a('kPKH');
      a('h9md');
      t['a'] = l['a'];
    },
    ltCa: function(e, t, a) {
      'use strict';
      var l = a('BMrR');
      a('7xIR');
      t['a'] = l['a'];
    },
    sSyK: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['complex-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['complex-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    yh9z: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['element-skeleton-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['element-skeleton-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
