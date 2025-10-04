export interface Sermon {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  speaker: string
  series: string
  scripture?: string
  duration: string
  audioUrl?: string
}

const sermonsData: Sermon[] = [
  {
    slug: "walking-in-faith",
    title: "Walking in Faith: Trusting God's Plan",
    excerpt:
      "Discover how to trust in God's perfect timing and plan for your life, even when the path ahead seems uncertain.",
    content: `# Walking in Faith: Trusting God's Plan

## Introduction

Faith is not the absence of doubt, but the presence of trust in God's character and promises. In today's message, we explore what it means to walk by faith and not by sight.

## Key Points

### 1. Faith Requires Action
- Faith without works is dead (James 2:26)
- We must step out in obedience to God's calling
- Trust is demonstrated through our choices

### 2. God's Timing is Perfect
- His ways are higher than our ways (Isaiah 55:8-9)
- Waiting on the Lord strengthens our faith
- Every season has a purpose in God's plan

### 3. Walking in Community
- We need fellow believers to encourage us
- Iron sharpens iron (Proverbs 27:17)
- Together we can accomplish more for God's kingdom

## Conclusion

As we walk in faith, let us remember that God is faithful to complete the good work He has begun in us. Trust in His plan, step out in obedience, and watch Him work miracles in your life.

## Prayer

Lord, help us to trust in Your perfect plan for our lives. Give us the courage to step out in faith, even when we cannot see the full picture. Strengthen our faith and help us to encourage others in their journey with You. Amen.`,
    date: "December 15, 2024",
    speaker: "Pastor Johnson",
    series: "Faith Journey",
    scripture: "Hebrews 11:1-6",
    duration: "35 min",
    audioUrl: "/audio/walking-in-faith.mp3",
  },
  {
    slug: "love-in-action",
    title: "Love in Action: Serving Others",
    excerpt:
      "Learn how to demonstrate Christ's love through practical service and compassionate action in our community.",
    content: `# Love in Action: Serving Others

## Introduction

Love is not just a feeling—it's a choice and an action. Today we explore how we can demonstrate Christ's love through serving others in practical ways.

## Key Points

### 1. Love is a Verb
- Love requires action, not just emotion
- Jesus demonstrated love through service
- We are called to follow His example

### 2. Serving the Least of These
- Matthew 25:40 - serving others is serving Christ
- Look for opportunities in your daily life
- Small acts of kindness make a big difference

### 3. The Heart of Service
- Serve with humility and joy
- Don't seek recognition or reward
- Let love be your motivation

## Practical Applications

- Volunteer at local shelters
- Help elderly neighbors
- Support single parents in your community
- Mentor young people
- Share your resources generously

## Conclusion

When we serve others with love, we reflect the heart of Christ to the world. Let us be known by our love and our willingness to serve.

## Prayer

Father, fill our hearts with Your love and give us eyes to see the needs around us. Help us to serve others with joy and humility, reflecting Your love to our community. Amen.`,
    date: "December 8, 2024",
    speaker: "Pastor Johnson",
    series: "Living Like Jesus",
    scripture: "1 John 3:16-18",
    duration: "32 min",
    audioUrl: "/audio/love-in-action.mp3",
  },
  {
    slug: "hope-in-difficult-times",
    title: "Hope in Difficult Times",
    excerpt: "Find strength and encouragement in God's promises during life's most challenging seasons.",
    content: `# Hope in Difficult Times

## Introduction

Life brings seasons of difficulty and pain, but as believers, we have an anchor for our souls—hope in Christ Jesus.

## Key Points

### 1. Hope is Our Anchor
- Hebrews 6:19 - hope as an anchor for the soul
- Hope keeps us steady in storms
- Our hope is not in circumstances but in Christ

### 2. God's Promises are Sure
- He will never leave nor forsake us
- All things work together for good (Romans 8:28)
- His grace is sufficient for every trial

### 3. Finding Strength in Community
- Bear one another's burdens
- Pray for and encourage each other
- Share your struggles and victories

## Encouragement for Today

- Remember God's faithfulness in the past
- Focus on His promises, not your problems
- Take one day at a time
- Seek support from your church family

## Conclusion

No matter what you're facing today, remember that your hope is secure in Christ. He is with you in the storm and will bring you through to victory.

## Prayer

Lord, in our difficult times, help us to remember that You are our hope and our strength. When we feel overwhelmed, remind us of Your faithfulness and love. Give us peace that surpasses understanding. Amen.`,
    date: "December 1, 2024",
    speaker: "Pastor Johnson",
    series: "Anchored in Hope",
    scripture: "Romans 15:13",
    duration: "38 min",
    audioUrl: "/audio/hope-in-difficult-times.mp3",
  },
]

export function getAllSermons(): Sermon[] {
  return sermonsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getSermon(slug: string): Sermon | null {
  return sermonsData.find((sermon) => sermon.slug === slug) || null
}

export function getAllSermonSlugs(): string[] {
  return sermonsData.map((sermon) => sermon.slug)
}
