export const questions = {
  protagonist: [
    {
      id: 1,
      text: '第一章 命运的岔路',
      scenario: '你获得了拯救世界的预言，但预言说你需要献祭此生最爱的人才能成功。你尚未得知最爱的人是谁。你会怎么做？',
      options: [
        { text: '接受预言，无论代价', scores: { sacrifice: 2, action: 1, principle: 0, emotion: -1 } },
        { text: '寻找其他方法，拒绝献祭', scores: { sacrifice: -1, action: 0, principle: 1, emotion: 2 } },
        { text: '假装不知道，过好当下', scores: { sacrifice: 0, action: -2, principle: -1, emotion: 1 } }
      ]
    },
    {
      id: 2,
      text: '第二章 暗处的低语',
      scenario: '你的挚友暗中投靠了敌人，但你发现他是因为家人被挟持。其他伙伴准备处决他，你知道真相。',
      options: [
        { text: '公开真相为友辩护', scores: { sacrifice: 0, action: 1, principle: 2, emotion: 1 } },
        { text: '暗中放走他和他的家人', scores: { sacrifice: 1, action: -1, principle: -2, emotion: 2 } },
        { text: '让他将计就计传递假情报', scores: { sacrifice: -1, action: 2, principle: 1, emotion: -1 } }
      ]
    },
    {
      id: 3,
      text: '第三章 天平的两端',
      scenario: '敌人抓住了一整座村庄的村民，要你交出你拥有的神器才放人。神器是你对抗最终boss的唯一希望。',
      options: [
        { text: '交出神器救村民', scores: { sacrifice: 2, emotion: 1, action: -1, principle: 0 } },
        { text: '不交，为了更大的正义', scores: { sacrifice: -1, emotion: -2, action: 1, principle: 2 } },
        { text: '假意交出，暗中设伏', scores: { sacrifice: 0, emotion: 0, action: 2, principle: -1 } }
      ]
    },
    {
      id: 4,
      text: '第四章 王座的诱惑',
      scenario: '击败强敌后，众人拥立你为王。但你知道自己并不适合治理国家，另有一位贤者更适合。可贤者曾是你的仇敌。',
      options: [
        { text: '接受王位，努力学习', scores: { sacrifice: 0, action: 2, principle: -1, emotion: 1 } },
        { text: '让贤给仇敌', scores: { sacrifice: 2, action: -1, principle: 2, emotion: -1 } },
        { text: '建立议会共治', scores: { sacrifice: -1, action: 0, principle: 1, emotion: 1 } }
      ]
    },
    {
      id: 5,
      text: '第五章 时光的代价',
      scenario: '你得到一次回到过去的机会，但只能救一个人——你的初恋或你的师父。救了师父能改变战争结局，救了初恋能改变你一生的遗憾。',
      options: [
        { text: '救师父，为天下', scores: { sacrifice: 1, action: 1, principle: 2, emotion: -2 } },
        { text: '救初恋，为自己', scores: { sacrifice: -1, action: 0, principle: -1, emotion: 2 } },
        { text: '谁也不救，不篡改历史', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 0 } }
      ]
    },
    {
      id: 6,
      text: '第六章 敌营的玫瑰',
      scenario: '敌国公主向你告白，说愿意背叛家族与你在一起。但你知道这是窃取敌军情报的绝佳机会。',
      options: [
        { text: '接受感情，放弃窃取计划', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 2 } },
        { text: '利用感情获取情报', scores: { sacrifice: -2, action: 2, principle: -2, emotion: -1 } },
        { text: '坦白身份，尊重她的选择', scores: { sacrifice: 1, action: 0, principle: 2, emotion: 1 } }
      ]
    },
    {
      id: 7,
      text: '第七章 末路狂徒',
      scenario: '最终决战前，你的队伍中出现了一个叛徒。如果公开审判，士气将崩溃；如果私下处决你将成为杀人凶手。',
      options: [
        { text: '公开审判，接受后果', scores: { sacrifice: 1, action: 0, principle: 2, emotion: 0 } },
        { text: '私下处决，维护士气', scores: { sacrifice: -1, action: 2, principle: -2, emotion: -1 } },
        { text: '给他一次机会，派去敢死队', scores: { sacrifice: 2, action: -1, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 8,
      text: '第八章 终局的抉择',
      scenario: '最终boss提出一个交易：他自尽，世界和平，但所有人都将忘记你曾经存在的痕迹。你会消失于所有人的记忆中。',
      options: [
        { text: '接受交易，无名地拯救世界', scores: { sacrifice: 2, action: 1, principle: 1, emotion: -1 } },
        { text: '拒绝交易，堂堂正正决战', scores: { sacrifice: -1, action: 2, principle: 0, emotion: 1 } },
        { text: '问他为什么要这么做，尝试理解', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 2 } }
      ]
    }
  ],

  villain: [
    {
      id: 1,
      text: '第一章 暗影的邀请',
      scenario: '有人出高价请你除掉一个腐败的官员。这个官员该死，但如果你动手，会有无辜的仆人替你背锅。你怎么办？',
      options: [
        { text: '干净利落解决，布局掩护', scores: { sacrifice: -1, action: 2, principle: 0, emotion: -1 } },
        { text: '收集证据公开举报', scores: { sacrifice: 0, action: -1, principle: 2, emotion: 1 } },
        { text: '不出手，等待其他人动手', scores: { sacrifice: 1, action: -2, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 2,
      text: '第二章 棋子的觉悟',
      scenario: '你在组织中地位不稳。有一个忠诚但能力一般的下属，你可以把他推出去当替罪羊来保全自己。',
      options: [
        { text: '牺牲下属保全自己', scores: { sacrifice: -2, action: 1, principle: -2, emotion: 0 } },
        { text: '扛下责任保护下属', scores: { sacrifice: 2, action: -1, principle: 1, emotion: 1 } },
        { text: '让下属戴罪立功', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 3,
      text: '第三章 狼与羊',
      scenario: '你发现竞争对手在谋划对你动手。你先下手为强可以完美反击，但会误伤对手公司的一群底层员工。',
      options: [
        { text: '先发制人，不计代价', scores: { sacrifice: -2, action: 2, principle: -1, emotion: -1 } },
        { text: '收集证据正当反击', scores: { sacrifice: 0, action: 0, principle: 2, emotion: 1 } },
        { text: '与对手谈判和解', scores: { sacrifice: 1, action: -1, principle: 0, emotion: 2 } }
      ]
    },
    {
      id: 4,
      text: '第四章 面具之下',
      scenario: '你一直伪装身份潜伏在正义阵营。今天他们派你去执行一项危险但正义的任务。如果你认真执行，可能暴露身份。',
      options: [
        { text: '认真执行任务', scores: { sacrifice: 1, action: 1, principle: 1, emotion: 0 } },
        { text: '暗中破坏，维持潜伏', scores: { sacrifice: -1, action: 0, principle: -2, emotion: -1 } },
        { text: '借机除掉阵营领袖让自己上位', scores: { sacrifice: -2, action: 2, principle: -1, emotion: -2 } }
      ]
    },
    {
      id: 5,
      text: '第五章 血的契约',
      scenario: '你的亲人被对手绑架，要你交出组织机密换取他的命。交出去会让很多人死，不交你的亲人必死。',
      options: [
        { text: '交出机密救亲人', scores: { sacrifice: 1, action: -1, principle: -2, emotion: 2 } },
        { text: '不交，为组织保密', scores: { sacrifice: -1, action: 1, principle: 2, emotion: -2 } },
        { text: '假意交易，策划反杀', scores: { sacrifice: 0, action: 2, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 6,
      text: '第六章 王座背后',
      scenario: '你成功架空了首领，实际上已成为组织的掌舵人。老首领求你看在多年情分上让他体面退休。但你担心他留有后手。',
      options: [
        { text: '送他体面退休，监视余生', scores: { sacrifice: 0, action: 0, principle: 1, emotion: 1 } },
        { text: '斩草除根永绝后患', scores: { sacrifice: -2, action: 2, principle: -2, emotion: -1 } },
        { text: '让他交出所有底牌后放生', scores: { sacrifice: -1, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 7,
      text: '第七章 毁灭与新生',
      scenario: '你发现组织创立之初的理想已经被腐蚀。你可以推翻它重建，但这会让无数依靠组织生存的人失去一切。',
      options: [
        { text: '推翻重建，长痛不如短痛', scores: { sacrifice: 1, action: 2, principle: 1, emotion: -1 } },
        { text: '内部改革，慢慢扭转', scores: { sacrifice: 0, action: -1, principle: 2, emotion: 1 } },
        { text: '保留组织，利用现有体系', scores: { sacrifice: -1, action: 0, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 8,
      text: '第八章 最后的赌注',
      scenario: '你策划了完美的最终计划，但实施前夜，你最信任的助手告诉你他其实是卧底。如果你继续，计划会被破坏。',
      options: [
        { text: '当场除掉助手，按原计划进行', scores: { sacrifice: -1, action: 2, principle: -2, emotion: -2 } },
        { text: '修改计划将计就计', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 0 } },
        { text: '放弃计划，带助手远走高飞', scores: { sacrifice: 2, action: -2, principle: 1, emotion: 2 } }
      ]
    }
  ],

  tragic_support: [
    {
      id: 1,
      text: '第一章 聚光灯外',
      scenario: '主角要去执行九死一生的任务，他需要你的帮助。但你本来约好要陪生病的母亲去医院。',
      options: [
        { text: '陪主角去执行任务', scores: { sacrifice: 2, action: 1, principle: 0, emotion: -1 } },
        { text: '陪母亲去医院', scores: { sacrifice: -1, action: -1, principle: 1, emotion: 2 } },
        { text: '想办法两全，找别人帮主角', scores: { sacrifice: 0, action: 0, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 2,
      text: '第二章 暗恋的代价',
      scenario: '你暗恋主角多年。今天主角的恋人遭遇危险，主角求你去救人，而他要去处理另一件事。你去了可能永远回不来。',
      options: [
        { text: '答应去救主角的恋人', scores: { sacrifice: 2, action: 1, principle: 0, emotion: -1 } },
        { text: '拒绝，让主角自己选择', scores: { sacrifice: -1, action: -1, principle: 1, emotion: 1 } },
        { text: '坦白感情，再看主角如何选择', scores: { sacrifice: 0, action: 0, principle: -1, emotion: 2 } }
      ]
    },
    {
      id: 3,
      text: '第三章 替身',
      scenario: '反派要求用一条命换一群人的命。众人目光不约而同看向了你——因为你"最有牺牲精神"。',
      options: [
        { text: '主动站出来牺牲', scores: { sacrifice: 2, action: 0, principle: 1, emotion: -1 } },
        { text: '拒绝成为替罪羊', scores: { sacrifice: -1, action: 1, principle: 1, emotion: 1 } },
        { text: '提议抽签决定', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 4,
      text: '第四章 成全',
      scenario: '主角和你的恋人同时被困在两个不同的地方。你只能救一个，救出的人会以为你优先救的是别人。',
      options: [
        { text: '救主角', scores: { sacrifice: 1, action: 1, principle: 1, emotion: -2 } },
        { text: '救恋人', scores: { sacrifice: 0, action: 0, principle: -1, emotion: 2 } },
        { text: '尝试同时救两人', scores: { sacrifice: 1, action: 2, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 5,
      text: '第五章 最后的礼物',
      scenario: '你获得了一件能救命的宝物。但主角即将面临一场恶战，你可能更需要这件宝物。',
      options: [
        { text: '把宝物送给主角', scores: { sacrifice: 2, action: 0, principle: 1, emotion: -1 } },
        { text: '留给自己保命', scores: { sacrifice: -2, action: 0, principle: -1, emotion: 1 } },
        { text: '和主角一起研究宝物的用法', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 6,
      text: '第六章 退场时刻',
      scenario: '团队在撤退时需要一个断后的人。留下几乎必死，但能让大家安全撤离。你是战力最弱的。',
      options: [
        { text: '主动要求断后', scores: { sacrifice: 2, action: 1, principle: 0, emotion: 0 } },
        { text: '建议最强的人断后', scores: { sacrifice: -1, action: 0, principle: 1, emotion: -1 } },
        { text: '设计陷阱拖延敌人再撤', scores: { sacrifice: 0, action: 2, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 7,
      text: '第七章 隐藏的伤痕',
      scenario: '主角在决战前夜意志消沉。你发现唯一能激励主角的方法是说一个善意的谎言——骗主角你已经安全撤离了。其实你还在危险中。',
      options: [
        { text: '说谎让主角安心决战', scores: { sacrifice: 2, action: 1, principle: -1, emotion: 0 } },
        { text: '说实话让主角来救你', scores: { sacrifice: -1, action: -1, principle: 1, emotion: 1 } },
        { text: '默默守护在主角身边', scores: { sacrifice: 1, action: 0, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 8,
      text: '第八章 不留名',
      scenario: '战争结束了。史官在记录功绩，几乎没有人记得你的贡献。有一个人愿意为你著书立传，但代价是你要说出主角曾经犯过的错。',
      options: [
        { text: '拒绝，让功劳归于主角', scores: { sacrifice: 2, action: 0, principle: 1, emotion: -1 } },
        { text: '接受，为自己正名', scores: { sacrifice: -1, action: 0, principle: 0, emotion: 2 } },
        { text: '写一本所有人的真实记录', scores: { sacrifice: 0, action: 1, principle: 2, emotion: 0 } }
      ]
    }
  ],

  wise_hermit: [
    {
      id: 1,
      text: '第一章 山下的喧嚣',
      scenario: '你隐居多年，天下大乱。各路势力请你出山，都说自己才是正义的一方。你暗中观察，发现双方都有道理也都有罪孽。',
      options: [
        { text: '继续隐居，不参与世事', scores: { sacrifice: 0, action: -2, principle: 1, emotion: 0 } },
        { text: '出山扶持看起来更好的一方', scores: { sacrifice: 1, action: 1, principle: 0, emotion: 0 } },
        { text: '凭借智慧促成双方和谈', scores: { sacrifice: 0, action: 1, principle: 2, emotion: 1 } }
      ]
    },
    {
      id: 2,
      text: '第二章 不教之教',
      scenario: '一个天资聪颖的少年找到你，要拜你为师。但你看出他心术不正，学了你的本事会为祸人间。',
      options: [
        { text: '拒绝收徒，点化他向善', scores: { sacrifice: 1, action: 0, principle: 2, emotion: 0 } },
        { text: '收徒并引导他向善', scores: { sacrifice: 0, action: 1, principle: 1, emotion: 1 } },
        { text: '传授一半本事留一手', scores: { sacrifice: -1, action: 0, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 3,
      text: '第三章 天机不可泄露',
      scenario: '你预知到一场巨大的天灾即将降临，但如果泄露天机，你将遭受天谴折寿十年。',
      options: [
        { text: '泄露天机，拯救众生', scores: { sacrifice: 2, action: 1, principle: 1, emotion: 0 } },
        { text: '暗中布局减少伤亡', scores: { sacrifice: 1, action: 0, principle: 1, emotion: 0 } },
        { text: '沉默，顺其自然', scores: { sacrifice: -1, action: -2, principle: 0, emotion: -1 } }
      ]
    },
    {
      id: 4,
      text: '第四章 善恶的边界',
      scenario: '你发现山里隐居的一位老邻居其实是隐退的魔头。他这些年安分守己、行善积德。一群年轻侠客要来除魔卫道。',
      options: [
        { text: '为邻居隐瞒', scores: { sacrifice: 0, action: -1, principle: -1, emotion: 2 } },
        { text: '让侠客们公平处置', scores: { sacrifice: -1, action: 0, principle: 2, emotion: -1 } },
        { text: '出面调解，劝和双方', scores: { sacrifice: 1, action: 1, principle: 1, emotion: 1 } }
      ]
    },
    {
      id: 5,
      text: '第五章 智者的谎言',
      scenario: '一方首领来向你请教治国之道。你知道照实说会伤害他的自尊心导致他拒绝采纳，用一个简单但片面的方法更容易让他听进去。',
      options: [
        { text: '说真话，哪怕他不听', scores: { sacrifice: 0, action: 0, principle: 2, emotion: -1 } },
        { text: '用他能接受的方式说一部分真相', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 1 } },
        { text: '说他想听的话，明哲保身', scores: { sacrifice: -1, action: -1, principle: -2, emotion: 0 } }
      ]
    },
    {
      id: 6,
      text: '第六章 传承与放手',
      scenario: '你毕生所学需要一个传人。两个候选人：一个心性纯良但资质平庸，一个天赋异禀但功利心重。',
      options: [
        { text: '选心性纯良的', scores: { sacrifice: 0, action: 0, principle: 2, emotion: 1 } },
        { text: '选天赋异禀的', scores: { sacrifice: 0, action: 1, principle: -1, emotion: 0 } },
        { text: '两人都教，互相制衡', scores: { sacrifice: 1, action: 0, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 7,
      text: '第七章 袖手旁观',
      scenario: '你看到两个人在争斗，一个是你多年的故交，但他正在做错事。另一个是陌生人，但站在正义一方。你若出手陌生人会赢。',
      options: [
        { text: '帮陌生人维护正义', scores: { sacrifice: 1, action: 1, principle: 2, emotion: -1 } },
        { text: '帮故交，念及旧情', scores: { sacrifice: -1, action: 1, principle: -2, emotion: 1 } },
        { text: '保持中立两不相帮', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 0 } }
      ]
    },
    {
      id: 8,
      text: '第八章 大道至简',
      scenario: '你悟出了宇宙的终极真理。这个真理如果公之于众会颠覆整个世界的认知体系，带来混乱但也带来进化。',
      options: [
        { text: '公之于众，让世界自行消化', scores: { sacrifice: 1, action: 2, principle: 1, emotion: 0 } },
        { text: '记录成书，留给后人发现', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 0 } },
        { text: '只传授给有缘人', scores: { sacrifice: 0, action: 0, principle: -1, emotion: 1 } }
      ]
    }
  ],

  bystander: [
    {
      id: 1,
      text: '第一章 无妄之灾',
      scenario: '你在街上好好走着，突然两边势力火并。你倒在地上，一个伤兵求你把他拖到安全的地方，但这样做你会暴露在流弹中。',
      options: [
        { text: '冒险救伤兵', scores: { sacrifice: 2, action: 1, principle: 0, emotion: 1 } },
        { text: '自己逃命要紧', scores: { sacrifice: -2, action: -1, principle: -1, emotion: 0 } },
        { text: '找掩体躲起来等待结束', scores: { sacrifice: 0, action: 0, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 2,
      text: '第二章 城门失火',
      scenario: '你的邻居被查出是叛军家属，官兵要来抄家。邻居把幼子托付给你，求你保护。窝藏叛军家属是死罪。',
      options: [
        { text: '答应保护孩子', scores: { sacrifice: 2, action: 1, principle: 0, emotion: 1 } },
        { text: '拒绝，不想惹祸上身', scores: { sacrifice: -1, action: -1, principle: 0, emotion: -2 } },
        { text: '偷偷把孩子送到城外寺庙', scores: { sacrifice: 1, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 3,
      text: '第三章 小人物大选择',
      scenario: '你在市场卖菜，听到两个人在密谋刺杀城主。他们没注意到你。如果去告密可能被灭口，不说的话城主可能真的遇刺。',
      options: [
        { text: '假装没听见', scores: { sacrifice: 0, action: -2, principle: -1, emotion: 0 } },
        { text: '悄悄去告密', scores: { sacrifice: 0, action: 1, principle: 1, emotion: -1 } },
        { text: '自己跟踪调查', scores: { sacrifice: 1, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 4,
      text: '第四章 鱼与熊掌',
      scenario: '你在路上捡到一笔巨款。这笔钱够你全家过上好日子。但你隐约知道这笔钱是某个组织的赎金，背后可能还有人命。',
      options: [
        { text: '据为己有', scores: { sacrifice: -2, action: 0, principle: -2, emotion: 1 } },
        { text: '上交官府', scores: { sacrifice: 0, action: 0, principle: 2, emotion: -1 } },
        { text: '暗中调查是谁丢的', scores: { sacrifice: 0, action: 1, principle: 1, emotion: 0 } }
      ]
    },
    {
      id: 5,
      text: '第五章 墙头草',
      scenario: '两股势力都来拉拢你加入。如果你不选边站，可能会被两边都视为敌人。如果你选一边，至少能保命。',
      options: [
        { text: '加入看起来更强的一方', scores: { sacrifice: 0, action: 1, principle: -1, emotion: 0 } },
        { text: '保持中立，冒险', scores: { sacrifice: 1, action: -1, principle: 1, emotion: 0 } },
        { text: '假装加入一边暗中帮另一边', scores: { sacrifice: -1, action: 1, principle: -1, emotion: 1 } }
      ]
    },
    {
      id: 6,
      text: '第六章 咫尺天涯',
      scenario: '战争打到你家门口了。你可以带着家人逃往安全区，但路上可能会遭遇溃兵。留下来也可能被战火波及。',
      options: [
        { text: '连夜逃走', scores: { sacrifice: 0, action: 2, principle: 0, emotion: -1 } },
        { text: '加固房屋坚守', scores: { sacrifice: 0, action: -1, principle: 0, emotion: 1 } },
        { text: '挖地窖躲藏', scores: { sacrifice: 1, action: 0, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 7,
      text: '第七章 英雄的阴影',
      scenario: '一个自称英雄的人救了你全家，但他要求你以后为他提供掩护和住处。你发现他其实是通缉犯。',
      options: [
        { text: '遵守承诺，继续掩护', scores: { sacrifice: 1, action: 0, principle: -1, emotion: 1 } },
        { text: '向官府举报', scores: { sacrifice: -1, action: 1, principle: 2, emotion: -1 } },
        { text: '劝他去自首并为他求情', scores: { sacrifice: 0, action: 0, principle: 1, emotion: 1 } }
      ]
    },
    {
      id: 8,
      text: '第八章 平凡即幸福',
      scenario: '战争结束，百废待兴。一个军官看中了你家的地要建纪念碑。你若不从可能会被强征，若从了一家人没了生计。',
      options: [
        { text: '顺从交出土地', scores: { sacrifice: 2, action: -1, principle: 0, emotion: -1 } },
        { text: '联合邻居们抗议', scores: { sacrifice: 1, action: 2, principle: 1, emotion: 0 } },
        { text: '私下贿赂军官', scores: { sacrifice: -1, action: 0, principle: -2, emotion: 0 } }
      ]
    }
  ],

  comedian: [
    {
      id: 1,
      text: '第一章 笑面之下',
      scenario: '大家在庆祝胜利，气氛热烈。你注意到队伍中有人在酒里下了毒，但如果当场揭穿会毁了所有人的好心情。',
      options: [
        { text: '用玩笑暗示有危险', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 1 } },
        { text: '当场严肃制止', scores: { sacrifice: 0, action: 1, principle: 2, emotion: -1 } },
        { text: '假装没看见，继续搞笑', scores: { sacrifice: -1, action: -1, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 2,
      text: '第二章 小丑的尊严',
      scenario: '有人当面取笑你只是个跳梁小丑。你可以用一个精彩的段子回应，让所有人继续笑你。也可以用拳头让他闭嘴。',
      options: [
        { text: '用段子自嘲化解', scores: { sacrifice: 1, action: 0, principle: 0, emotion: 1 } },
        { text: '狠狠教训他', scores: { sacrifice: -1, action: 2, principle: -1, emotion: 0 } },
        { text: '沉默离开', scores: { sacrifice: 0, action: -1, principle: 1, emotion: -1 } }
      ]
    },
    {
      id: 3,
      text: '第三章 欢乐的代价',
      scenario: '队伍士气低落，需要你来活跃气氛。你想到一个自嘲的段子，但这个段子会暴露你自己一件很丢脸的往事。',
      options: [
        { text: '讲出来活跃气氛', scores: { sacrifice: 2, action: 1, principle: 0, emotion: 0 } },
        { text: '不讲，想别的办法', scores: { sacrifice: 0, action: 0, principle: 0, emotion: 1 } },
        { text: '编一个别人的故事', scores: { sacrifice: -1, action: 0, principle: -1, emotion: 0 } }
      ]
    },
    {
      id: 4,
      text: '第四章 假戏真做',
      scenario: '为了潜入敌营，你扮成小丑表演。但你发现敌营首领真的把你当成了知己，对你推心置腹。你获得了情报，但也得到了真情。',
      options: [
        { text: '利用感情获取情报', scores: { sacrifice: -1, action: 2, principle: -2, emotion: -1 } },
        { text: '放弃任务，不忍欺骗', scores: { sacrifice: 1, action: -1, principle: 1, emotion: 2 } },
        { text: '完成任务后坦白', scores: { sacrifice: 1, action: 0, principle: 1, emotion: 0 } }
      ]
    },
    {
      id: 5,
      text: '第五章 台前幕后',
      scenario: '你一直在用自己的快乐感染大家。今天你得知自己患了不治之症。大家正等着你上台表演。',
      options: [
        { text: '上台表演，当什么都没发生', scores: { sacrifice: 2, action: 1, principle: 0, emotion: 0 } },
        { text: '当众宣布病情，大哭一场', scores: { sacrifice: -1, action: -1, principle: 1, emotion: 2 } },
        { text: '悄悄告诉主角后离开', scores: { sacrifice: 0, action: 0, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 6,
      text: '第六章 玩笑的分寸',
      scenario: '你的一个粉丝为了帮你报复一个欺负过你的人，设了一个恶作剧陷阱。但他玩过头了，那个人可能会受重伤。',
      options: [
        { text: '阻止陷阱，教训粉丝', scores: { sacrifice: 0, action: 1, principle: 2, emotion: 0 } },
        { text: '让陷阱发生，给那人教训', scores: { sacrifice: -1, action: 0, principle: -1, emotion: -2 } },
        { text: '偷偷修改陷阱让伤害降到最低', scores: { sacrifice: 0, action: 1, principle: 0, emotion: 0 } }
      ]
    },
    {
      id: 7,
      text: '第七章 孤独的聚光灯',
      scenario: '你在舞台上光芒万丈，但下台后你发现自己其实一个真正的朋友都没有。有人愿意真心和你交往，但需要你卸下搞笑的面具。',
      options: [
        { text: '卸下面具真诚交往', scores: { sacrifice: 1, action: 0, principle: 1, emotion: 2 } },
        { text: '继续保持搞笑人设', scores: { sacrifice: 0, action: 0, principle: 0, emotion: -1 } },
        { text: '试着慢慢改变', scores: { sacrifice: 0, action: 0, principle: 0, emotion: 1 } }
      ]
    },
    {
      id: 8,
      text: '第八章 最后的表演',
      scenario: '最终决战开始了。你不是最强的战士，但你是最好的气氛调节者。大家需要你在战场上给大家打气，但这会让你暴露在最大的危险中。',
      options: [
        { text: '冲在最前面为大家打气', scores: { sacrifice: 2, action: 2, principle: 0, emotion: 0 } },
        { text: '在后方为伤兵鼓劲', scores: { sacrifice: 0, action: -1, principle: 1, emotion: 1 } },
        { text: '用计谋引走部分敌人', scores: { sacrifice: 1, action: 1, principle: 0, emotion: 0 } }
      ]
    }
  ]
};
