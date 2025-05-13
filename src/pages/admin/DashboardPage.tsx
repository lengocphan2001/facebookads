import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  UserGroupIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalCampaigns: number;
  totalAdGroups: number;
  totalAds: number;
  totalSpent: number;
}

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalCampaigns: 0,
    totalAdGroups: 0,
    totalAds: 0,
    totalSpent: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [campaignsRes, adGroupsRes, adsRes] = await Promise.all([
        fetch('http://localhost:5000/api/campaigns'),
        fetch('http://localhost:5000/api/adgroups'),
        fetch('http://localhost:5000/api/ads'),
      ]);

      if (!campaignsRes.ok || !adGroupsRes.ok || !adsRes.ok) {
        throw new Error('Failed to fetch stats');
      }

      const campaigns = await campaignsRes.json();
      const adGroups = await adGroupsRes.json();
      const ads = await adsRes.json();

      const totalSpent = campaigns.reduce((sum: number, campaign: any) => 
        sum + (campaign.amountSpent || 0), 0);

      setStats({
        totalCampaigns: campaigns.length,
        totalAdGroups: adGroups.length,
        totalAds: ads.length,
        totalSpent,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const quickLinks = [
    {
      name: 'Campaigns',
      href: '/admin/campaigns',
      icon: MegaphoneIcon,
      count: stats.totalCampaigns,
    },
    {
      name: 'Ad Groups',
      href: '/admin/adgroups',
      icon: UserGroupIcon,
      count: stats.totalAdGroups,
    },
    {
      name: 'Ads',
      href: '/admin/ads',
      icon: ChartBarIcon,
      count: stats.totalAds,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <div
            key={link.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <link.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {link.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {link.count}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <Link
                  to={link.href}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Spent
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ${stats.totalSpent.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Quick Actions
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <link.icon className="h-5 w-5 mr-2" />
                Add {link.name.slice(0, -1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 