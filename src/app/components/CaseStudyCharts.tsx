import React from 'react';
import { DivergingBarChart, DonutChart, StatChips } from './Charts';

export function JoviaPerformance() {
  return (
    <div className="mt-5 pt-5 border-t border-[#333] space-y-6">
      <div className="space-y-4">
        <p className="text-xs text-[#B3B3B3] uppercase tracking-wide">
          Marathon week social listening · Apr 30–May 6, 2026 vs. prior week
        </p>
        <DivergingBarChart
          data={[
            { label: 'Total Mentions', value: '91', change: 727 },
            { label: 'Total Reach', value: '318K', change: 1655 },
            { label: 'Social Media Reactions', value: '3,761', change: 707 },
            { label: 'Social Media Comments', value: '364', change: 2327 },
            { label: 'Social Media Shares', value: '191', change: 6267 },
            { label: 'Total Social Media Interactions', value: '4,316', change: 792 },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-xs text-[#B3B3B3] uppercase tracking-wide">
          Cross-network account performance · Sep 1–13, 2026 vs. prior year
        </p>
        <DivergingBarChart
          live={false}
          data={[
            { label: 'Impressions', value: '856,699', change: 147.7 },
            { label: 'Audience', value: '52,083', change: 5.1 },
            { label: 'Post Link Clicks', value: '5,701', change: -30.9 },
            { label: 'Engagements', value: '6,728', change: -44.1 },
            { label: 'Engagement Rate', value: '0.8%', change: -77.4 },
          ]}
        />
      </div>
      <p className="text-xs text-[#B3B3B3]">
        Built creative in Canva, tracked competitor and sentiment signal in Brandwatch, and cut short-form video in CapCut for the sponsorship push.
      </p>
    </div>
  );
}

export function Jakes58Performance() {
  return (
    <div className="mt-5 pt-5 border-t border-[#333] grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <p className="text-xs text-[#B3B3B3] uppercase tracking-wide">Instagram · Jun 15–Aug 31, 2026</p>
        <DonutChart
          centerLabel="Total Views"
          centerValue="187K"
          data={[
            { label: 'Followers', value: 57.1, color: '#1DB954' },
            { label: 'Non-followers', value: 42.9, color: '#3b3b3b' },
          ]}
        />
        <p className="text-xs text-[#B3B3B3]">By content type</p>
        <StatChips
          items={[
            { label: 'Posts', value: '47.5%' },
            { label: 'Reels', value: '27.5%' },
            { label: 'Stories', value: '25.0%' },
          ]}
        />
        <p className="text-xs text-[#B3B3B3]">Top posts by views</p>
        <StatChips
          items={[
            { label: 'Jul 22', value: '13K' },
            { label: 'Jul 24', value: '8.2K' },
            { label: 'Aug 19', value: '7K' },
            { label: 'Aug 10', value: '4.3K' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-xs text-[#B3B3B3] uppercase tracking-wide">Facebook · Jul 13–Aug 9, 2026</p>
        <DivergingBarChart
          data={[
            { label: 'Views', value: '194.6K', change: 27.6 },
            { label: 'Visits', value: '15.6K', change: 9.7 },
            { label: 'Interactions', value: '1.7K', change: 8.8 },
            { label: 'Video Views (3s)', value: '23K', change: 21.9 },
            { label: 'Conversations Started', value: '58', change: 45 },
            { label: 'Follows', value: '70', change: -6.7 },
          ]}
        />
        <p className="text-xs text-[#B3B3B3]">
          Net follows still grew 487.5% period over period, even as raw follow count dipped.
        </p>
      </div>
    </div>
  );
}
